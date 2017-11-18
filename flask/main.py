
from sqlalchemy import create_engine
from sqlalchemy import MetaData, Column, Table, ForeignKey
from sqlalchemy import Integer, String, DateTime
import sqlalchemy
import os
import re
from flask import Flask, request
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from json import dumps
from flask_jsonpify import jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
from flask import render_template
from flask_mail import Message
from decorators import async
from config import ADMINS
import json
import datetime
date_handler = lambda obj: ( obj.isoformat()
                             if isinstance(obj, (datetime.datetime, datetime.date))
                             else None)

@async
def send_async_email(app, msg):
    with app.app_context():
        mail.send(msg)


def get_postgres(ip, port):
    # engine = sqlalchemy.create_engine(f'postgresql+psycopg2://postgres:postgres@{ip}:{port}')
    engine = sqlalchemy.create_engine('postgresql+psycopg2://postgres:postgres@{}:{}'.format(ip,port ))
    return engine

def send_email(subject, sender, recipients, text_body, html_body):
    msg = Message(subject, sender=sender, recipients=recipients)
    msg.body = text_body
    msg.html = html_body
    send_async_email(app, msg)


def follower_notification(followed, follower):
    send_email("[Potential customer] %s is now following you!" % follower.nickname,
               ADMINS[0],
               [followed.email],
               render_template("follower_email.txt",
                               user=followed, follower=follower),
               render_template("follower_email.html",
                               user=followed, follower=follower))

def create_db(connection_string):
    if connection_string.startswith('sqlite'):
        db_file = re.sub("sqlite.*:///", "", connection_string)
        # os.makedirs(os.path.dirname(db_file), exist_ok=True)
    engine = sqlalchemy.create_engine(connection_string)
    return engine

conn_string = 'sqlite:///wrkr.db'

engine = get_postgres("127.0.0.1", 5432)

app = Flask(__name__)
api = Api(app)
mail = Mail(app)
db = SQLAlchemy(app)

# @app.route('/employees')
class Employees(Resource):
    def get(self):
        # conn = db_connect.connect() # connect to database
        conn = get_postgres("127.0.0.1", 5432)
        query = conn.execute("select * from employees") # This line performs query and returns json result
        return {'employees': [json.dumps(i[0], default= date_handler )for i in query.cursor.fetchall()]} # Fetches first column that is Employee ID
    def put(self, name):
        conn = db_connect.connect()
        query = conn.execute("Insert into employees (name) {}".format(name))
        return None

class Materials(Resource):
    def get(self):
        # conn = db_connect.connect() # connect to database
        conn = get_postgres("127.0.0.1", 5432)
        query = conn.execute("select * from material") # This line performs query and returns json result
        return {'materials': [json.dumps(i, default= date_handler )for i in query.cursor.fetchall()]} # Fetches first column that is Employee ID
    def put(self, name):
        conn = db_connect.connect()
        query = conn.execute("Insert into employees (name) {}".format(name))
        return None

class Employees_Name(Resource):
    def get(self, employee_id):
        conn = db_connect.connect()
        query = conn.execute("select * from employees where EmployeeId =%d "  %int(employee_id))
        result = {'data': [dict(zip(tuple (query.keys()) ,i)) for i in query.cursor]}
        return jsonify(result)
        

api.add_resource(Employees, '/employees') # Route_1
api.add_resource(Employees_Name, '/employees/<employee_id>') # Route_3

api.add_resource(Materials, '/materials') # Route_1
# api.add_resource(Employees_Name, '/employees/<employee_id>') # Route_3


if __name__ == '__main__':
     app.run(port=5002)
