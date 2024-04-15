import styled from 'styled-components';
export const ParticipantWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  //min-width: 500px;
  @media (max-width: 860px) {
    width: 100%;
    height: 80%; //todo
    flex-shrink: 0;
  }
  .title {
    font-weight: bold;
    font-size: 40px;
  }
`;
