import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavigationContainerSC = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: rgba(207, 207, 207, 0.025);
`;

export const LogoContainerSC = styled(Link)`
  display: flex;
  height: 50px;
  .NavLogo {
    #logo {
      width: 100px;
      height: 60px;
    }
  }
`;

export const NavLinkSC = styled(Link)`
  color: rgb(86, 80, 100);
  margin-right: 20px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
`;

export const NavLinksContainerSC = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
