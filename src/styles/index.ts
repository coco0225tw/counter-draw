import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  position: relative;
  padding: 40px;
  gap: 20px;
  min-width: 500px;
  @media (max-width: 860px) {
    flex-direction: column;
    overflow: scroll;
  }
`;
