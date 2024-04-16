import styled from 'styled-components';
export const TimerSetterWrapper = styled.div`
  display: flex;
  align-items: center;
  #minuteInput {
    width: 160px;
    height: 50px;
    border-radius: 4px;
    margin-right: 20px;
    @media (max-width: 500px) {
      margin-right: 10px;
      width: 100px;
      transform-property: width;
    }
  }
  .button {
    padding: 8px 24px;
    height: 100%;
    background-color: #222222;
    color: #ffffff;
    border-radius: 4px;
    margin-left: 60px;
    font-weight: lighter;
    cursor: pointer;
    @media (max-width: 500px) {
      margin-left: 10px;
    }
  }
`;
