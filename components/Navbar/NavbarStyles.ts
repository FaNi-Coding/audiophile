import styled from "styled-components";
import { device } from "../../styles/device";

export const StyledNav = styled.header`
  display: flex;
  position: relative;

  .menu,
  .cart,
  .logo {
    cursor: pointer;
  }

  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .links {
      display: none;
    }
  }

  .mobile-menu {
    position: absolute;
    top: 9rem;
    left: 0;
    min-height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 100;
    cursor: pointer;

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      background: white;
      color: black;
      gap: 8rem;
      border-radius: 0 0 0.8rem 0.8rem;
      padding-top: 2rem 0;

      li:first-child {
        margin-top: 9rem;
      }

      li:nth-child(3) {
        margin-bottom: 4rem;
      }

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: calc(100% - 4.8rem);
        text-align: center;
        letter-spacing: 0.2rem;
        cursor: pointer;
        background: ${(props) => props.theme.colors.tertiary};
        border-radius: 0.8rem;

        img {
          margin-top: -6rem;
          width: 40%;
        }
      }
    }
  }

  @media ${device.laptop} {
    .nav-wrapper {
      .links {
        display: flex;
        justify-content: space-between;
        ul {
          display: flex;
          li {
            padding: 0 2rem;
            list-style: none;
            font-size: 1.6rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.2rem;
            cursor: pointer;
          }
        }
      }
    }

    .mobile-menu,
    .menu {
      display: none;
    }
  }
`;
