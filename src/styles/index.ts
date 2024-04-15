import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  position: relative;

  @media (max-width: 800px) {
    flex-direction: column;
    overflow: scroll;
  }
`;
