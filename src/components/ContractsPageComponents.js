import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NewContractButton = styled(Link)`
  position: absolute;
  bottom: 25px;
  right: 25px;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  background: ${p => p.theme.primaryColor};
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 100px;
  border: none;
  box-shadow: 0 0 2px 2px #a0a09f66;
  text-decoration: none;
`

export const Panel = styled.li`
  height: ${p => p.expanded ? '300px' : '100px'};
  transition: all 0.4s ease;
  transition-delay: 0s;
  background: ${p => p.active === 2 ? 'radial-gradient(circle at top left, #3b3b56, #3b3b56, #2a2a3e)' : 'radial-gradient(circle at top left, #c1c1c1, #c1c1c1, #6f5a3e87)'};
  color: ${({ active }) => active === 2 ? '#f1c965' : 'black'};
  display: flex;
  width: 95%;
  margin: auto;
  padding: 10px 8px;
  box-shadow: 0px 0px 11px 1px #676767a3;
  justify-content: space-around;
  border-radius: 5px;
  overflow: hidden;
  opacity: ${ p => p.active === 0 ? '0.65' : '1' };
  margin-top: 0.35rem;
  h2 {
    margin: 0;
  }
  p {
    margin: 2px 0;
  }
`

export const PanelActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a {
    color: inherit;
  }
  .fa-circle {
    color: green;
  }
`

export const PanelContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  i {
    cursor: pointer;
  }
`

export const Icon = styled.i`
  margin: 0.3rem;
  padding: 3px;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 2px solid;
  cursor: pointer;
  text-decoration: none;
`

export const ContractsWrapper = styled.ul`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0;
  margin: 0;
  box-shadow: 4vh 7vh 14vh -6vh rgba(0, 0, 0, 0.35), -4vh 7vh 14vh -6vh rgba(0, 0, 0, 0.35);
`
