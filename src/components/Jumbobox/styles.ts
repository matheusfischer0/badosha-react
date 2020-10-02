import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  overflow: hidden;
  img.backgroundImage {
    width: 100%;
    min-width: 1000px;
  }
`;
export const Subtitle = styled.div`
  display: block;
  position: absolute;
  bottom: 30px;
  justify-content: center;
  img {
    filter: invert(0.9);
    display: flex;
    max-width: 200px;
  }
  text {
    width: 100%;
    max-width: 800px;
    font-size: 24px;
    text-align: center;
  }
  @media (min-width: 768px) {
    display: none;

    img {
      max-width: 500px;
    }
  }
`;
