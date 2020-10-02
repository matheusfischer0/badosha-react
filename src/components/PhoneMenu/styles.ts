import styled, { css } from 'styled-components';

interface MenuDivProps {
  visible: boolean;
}

export const Menu = styled.div<MenuDivProps>`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: -100vh;
  left: 0;
  z-index: 10;
  background-color: rgb(240, 240, 240);
  transition: top 0.5s;

  @media (min-width: 768px) {
    height: 100%;
  }

  ${(props) =>
    props.visible &&
    css`
      top: 0;
      border-color: #c53030;
    `}

  ul {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;

    li {
      display: flex;
      flex: 1;
      padding: 10px;
      a {
        font-size: 25px;
        text-decoration: none;
        color: rgba(230, 83, 73, 1);
      }
    }

    li:first-child {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      padding: 0;
      padding-right: 5px;
    }
  }
`;
