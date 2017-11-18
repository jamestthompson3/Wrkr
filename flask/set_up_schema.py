import sqlalchemy
import os
from subprocess import call

# call("docker run -d --name wrkr_tsdb -p 5432:5432 timescale/timescaledb")

def get_postgres(ip, port):
    # engine = sqlalchemy.create_engine(f'postgresql+psycopg2://postgres:postgres@{ip}:{port}')
    engine = sqlalchemy.create_engine('postgresql+psycopg2://postgres:postgres@{}:{}'.format(ip,port ))
    return engine

engine = get_postgres("127.0.0.1", 5432)

engine.execute("CREATE EXTENSION IF NOT EXISTS timescaledb CASCADE;")
engine.execute("""CREATE TABLE worker (
  Time        TIMESTAMPTZ       NOT NULL,
  WorkerID    INT              NOT NULL,
  Location    DOUBLE PRECISION  NULL,
  Company     DOUBLE PRECISION  NULL
);""")

engine.execute("""CREATE TABLE employees (
  Time_registered        TIMESTAMPTZ       NOT NULL,
  WorkerID    INT              NOT NULL,
  Worker_role    DOUBLE PRECISION  NULL,
  WorkerDescription     DOUBLE PRECISION  NULL,
  Location     DOUBLE PRECISION  NULL,
  HiredBy     DOUBLE PRECISION  NULL,
  start_date     TIMESTAMPTZ  NOT NULL
);""")


engine.execute("""CREATE TABLE material (
  Time_registered        TIMESTAMPTZ       NOT NULL,
  MaterialID    INT              NOT NULL,
  Source    DOUBLE PRECISION  NULL,
  MaterialDescription     DOUBLE PRECISION  NULL,
  Quantity     DOUBLE PRECISION  NULL,
  Location     DOUBLE PRECISION  NULL,
  ReceivedBy     DOUBLE PRECISION  NULL,
  Received_date     TIMESTAMPTZ  NULL
);""")

def get_cols(engine, table_name):
    return engine.execute("""SELECT column_name
    FROM information_schema.columns
    WHERE table_schema='public' AND table_name='{}'""".format(table_name)).fetchall()

engine.execute(f"Insert into material(Time_registered, MaterialID, Source, MaterialDescription, Quantity, Location, ReceivedBy,Received_date)values (Now(), 10, 10, 10, 10, 10, 10, Now());")

engine.execute("SELECT create_hypertable('employees', 'start_date');")
engine.execute("SELECT create_hypertable('material', 'Received_date');")
engine.execute("SELECT create_hypertable('worker', 'Time');")

import json
import datetime
date_handler = lambda obj: ( obj.isoformat()
                             if isinstance(obj, (datetime.datetime, datetime.date))
                             else None)
# json.dumps(data, default = date_handler)

