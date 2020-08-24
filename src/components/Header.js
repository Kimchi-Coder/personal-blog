import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledSiteTitle = styled.div`
  color: rebeccapurple;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  margin-top: 25px;
`;

export const Header = ({ siteTitle, siteDescription }) => {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <StyledSiteTitle>
          <div>{siteTitle}</div>
        </StyledSiteTitle>
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>{siteDescription}</p>
      </div>
    </>
  );
};
