import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: rebeccapurple;
`;

export const Header = ({ siteTitle, siteDescription }) => {
  return (
    <>
      <Link to="/">
        <StyledH1> {siteTitle} </StyledH1>
      </Link>
      <p>{siteDescription}</p>
    </>
  );
};
