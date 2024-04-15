import styled from 'styled-components';
export const ParticipantItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  .profile {
    width: 30%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ee4a68;
  }
  .name {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    background-color: #dddddd;
  }
`;
