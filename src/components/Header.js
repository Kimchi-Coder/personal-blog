import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import NavBarItem from './NavBarItem';

const StyledSiteTitle = styled.div`
  color: rebeccapurple;
  font-family: 'Archivo Black', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  margin-top: 25px;
`;

const StyledUL = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
  margin: 0 auto;
  & > li {
    list-style: none;
  }
  & > li > a {
    text-decoration: none;
  }
`;

export const Header = ({ siteTitle, siteDescription }) => {
  return (
    <>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <StyledSiteTitle>
          <div>{siteTitle}</div>
        </StyledSiteTitle>
      </Link>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p>{siteDescription}</p>
      </div>
      <StyledUL>
        <NavBarItem
          title="Home Page"
          linkTo="https://www.jeremyhage.dev"
          icon={null}
        >
          {' '}
        </NavBarItem>
        <NavBarItem
          title="GitHub"
          linkTo="https://github.com/Kimchi-Coder"
          icon={null}
        />
        <NavBarItem
          title="Twitter"
          linkTo="https://twitter.com/KimchiCoder"
          icon={null}
        />
      </StyledUL>
    </>
  );
};
