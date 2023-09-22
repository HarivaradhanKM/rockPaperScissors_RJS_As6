import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #223a5f;
  padding: 20px;
`
export const RulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`
export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  padding: 10px;
  @media screen and (max-width: 576px) {
    height: 260vh;
    width: 100%;
  }
`
export const PopUpImage = styled.img`
  height: 90%;
  width: 100%;
  margin-top: auto;
`
