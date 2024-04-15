import styled from 'styled-components';
export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  height: 100%;
  min-width: 500px;
  .title {
    font-weight: bold;
    font-size: 40px;
  }
  .profile {
    margin-top: 20px;
    transform-origin: top;
    transition: transform 300ms ease-in-out;
    border: solid 1px #dddddd;
    @media (max-width: 840px) and (min-width: 700px) {
      transform: scale(0.8);
    }
    @media (max-width: 700px) {
      width: 100%;
    }
  }
  .profile_img {
    width: 800px;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #886c60;
    @media (max-width: 700px) {
      width: 100%;
    }
  }
  .name {
    justify-content: start;
    font-size: 36px;
    padding: 10px 0;
    text-indent: 10px;
  }
`;
