import styled from 'styled-components';
export const CountDownTimerWrapper = styled.div`
  font-size: 200px;
  text-align: center;
  display: flex;
  color: #099396;
  position: relative;
`;

export const Colon = styled.div`
  width: 30px;
  position: relative;
  &:after,
  &:before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background-color: #099396;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  &:before {
    top: 30%;
  }
  &:after {
    bottom: 30%;
  }
`;
