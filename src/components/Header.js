import { Link } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import NavBarItem from './NavBarItem';
import githubIcon from '../assets/github.svg';
import twitterIcon from '../assets/twitter.svg';

const StyledSiteTitle = styled.div`
  color: #ff2e63;
  font-family: 'Archivo Black', sans-serif;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  margin-top: 25px;
  & ::before {
    content: '{';
    margin-right: 10px;
    color: #08d9d6;
  }
  & ::after {
    content: '}';
    margin-left: 10px;
    color: #08d9d6;
  }
`;

const StyledNavbar = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
  padding: 0;
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Between Brackets</title>
        <link rel="canonical" href="localhost:1337" />
      </Helmet>
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
          color: '#08d9d6',
        }}
      >
        <p>{siteDescription}</p>
      </div>
      <StyledNavbar>
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
          icon={githubIcon}
        />
        <NavBarItem
          title="Twitter"
          linkTo="https://twitter.com/KimchiCoder"
          icon={twitterIcon}
        />
      </StyledNavbar>
    </>
  );
};
