import styled from "styled-components";

const NavWrapper = styled.div`
  display: flex;
  flexwrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
  justifycontent: center;
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

export { NavWrapper };
