import styled from 'styled-components';
export const TimerWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }

  .title {
    font-weight: bold;
    font-size: 40px;
  }
`;
