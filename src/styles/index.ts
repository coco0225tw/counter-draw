import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  position: relative;
  padding: 40px;
  gap: 20px;
  min-width: 360px;
  transition-property: padding;

  @media (min-width: 1351px) {
    padding: 80px 300px;
  }
  @media (max-width: 1350px) and (min-width: 1200px) {
    padding: 80px 120px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 0;
    > :last-child {
      padding-bottom: 40px;
    }
  }
`;
