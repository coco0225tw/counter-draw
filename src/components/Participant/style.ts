import styled from 'styled-components';
export const ParticipantWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 80%;
    flex-shrink: 0;
  }
  .title {
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      align-self: flex-start;
    }
  }
`;
