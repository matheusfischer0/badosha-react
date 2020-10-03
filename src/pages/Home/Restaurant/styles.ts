import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Image = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 50vw;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  h2 {
    padding-top: 10vw;
    text-align: center;
  }
  p {
    text-align: justify;
    padding: 1vw 10vw 10vw;
  }

  @media (min-width: 768px) {
    p {
      font-size: 16px;
      padding: 1vw 10vw 2vw;
    }
    h2 {
      padding-top: 2vw;
      text-align: center;
    }
  }
  @media (min-width: 1024px) {
    h2 {
      font-size: 26px;
    }
    p {
      font-size: 22px;
      padding: 1vw 5vw;
    }
  }
  @media (min-width: 1600px) {
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 30px;
      padding: 1vw 5vw;
    }
  }
`;
