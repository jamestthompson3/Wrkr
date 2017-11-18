import React from 'react'
import styled from 'styled-components'


const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: #5AAA95;
`

const Wrapper = styled.div`
  max-width: 540px;
  margin: 0 auto;
  background: white;
  height: 100%;
  box-shadow: 0 2px 5px 0 #403f3f;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  background-color: #e6a833;
  height: 70px;
  padding: 20px;
  color: white;
  text-align: center;
`

const Content = styled.main`
  padding: 1rem;
  position: relative;
  flex: 1;
`

const Logo = styled.div`
  font-weight: 700;
`

const PageWrapper = ({ title, children }) => (
  <Background>
    <Wrapper>
      <Header>
        <Logo>Wrkr</Logo>
        <h1>{title}</h1>
      </Header>
      <Content>
        {children}
      </Content>
    </Wrapper>
  </Background>
)

export default PageWrapper
