import styled from 'styled-components';
export const TimerWrapper = styled.div`
  width: 64%;
  //min-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 860px) {
    width: 100%;
    //height: 80%;
    flex-shrink: 0;
  }

  .title {
    font-weight: bold;
    font-size: 40px;
  }
`;
