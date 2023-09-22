import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 80%;
  height: 120px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: transparent;
  margin-top: 2%;
`
export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreName = styled.h1`
  color: #fff;
  font: 20px Bree Serif;
  margin: 0px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const ScoreBoard = styled(ScoreNameContainer)`
  background-color: #fff;
  width: 15%;
  height: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 25%;
  }
`
export const ScoreHeading = styled.p`
  color: #223a5f;
  font: 600 normal 20px Bree Serif;
  margin: 35px 0 0 0;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const ScoreResult = styled.p`
  color: #223a5f;
  font: 500 42px Roboto;
  font-family: 'Roboto';
  margin-top: 0;
  @media screen and (max-width: 576px) {
    font-size: 24px;
    margin-top: 10px;
  }
`
