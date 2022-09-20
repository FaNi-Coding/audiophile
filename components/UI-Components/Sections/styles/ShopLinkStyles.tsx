import styled from "styled-components";
import { device } from "../../../../styles/device";

export const StyledShopLinks = styled.div`
  display: flex;

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    color: ${(props) => props.theme.colors.black};
    gap: 1.6rem;
    border-radius: 0 0 0.8rem 0.8rem;
    padding: 2rem 0;
    cursor: pointer;

    li {
      margin-top: 6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      text-align: center;
      letter-spacing: 0.2rem;
      background: ${(props) => props.theme.colors.tertiary};
      border-radius: 0.8rem;
      padding-bottom: 1rem;

      li:first-child {
        margin-top: 9rem;
      }

      img {
        margin-top: -6rem;
        width: 50%;
      }

      @media ${device.laptop} {
        width: 30%;
        li:first-child {
          margin-top: 0;
        }
      }
    }
  }

  /*  @media ${device.laptop} {
    flex-direction: row;
    width: 25%;
  } */
`;
