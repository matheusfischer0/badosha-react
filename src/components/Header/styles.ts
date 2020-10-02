import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 10px 11px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  img {
    filter: invert(0.9);
    width: 10%;
    min-width: 100px;
    max-width: 140px;
  }
`;

export const Menu = styled.div`
  ul {
    display: none;
    flex: 1;
    li {
      display: inline;
      list-style: none;
      padding: 0px 10px;
      font-size: 24px;
      a {
        text-decoration: none;
        color: rgb(240, 240, 240);
      }
    }
  }
  @media (min-width: 768px) {
    ul {
      display: flex;
    }
  }
`;

export const MenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuContainer = styled.div``;
