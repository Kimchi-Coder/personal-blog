import React from 'react';
import { Layout } from '../components/Layout';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import './index.css';

const IndexWrapper = styled.main`
  padding: 5px;
`;

const PostWrapper = styled.div`
  box-shadow: 3px 3px 10px #222831;
  margin: 15px 0;
  padding: 20px;
  & > a {
    text-decoration: none;
    color: #08d9d6;
  }
  & > a:visited {
    color: #08d9d6;
  }
  & > a > p {
    color: #f08a5d;
  }
`;

const StyledPostTitle = styled.div`
  display: flex;
  font-family: 'Archivo Black', sans-serif;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  color: #ff2e63;
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

export default ({ data }) => {
  return (
    <Layout>
      <IndexWrapper>
        {data.allMdx.nodes.map(({ excerpt, frontmatter, fields, id }) => (
          <PostWrapper key={id}>
            <Link to={fields.slug}>
              <StyledPostTitle>
                <div>{frontmatter.title}</div>
              </StyledPostTitle>
              <p>Date: {frontmatter.date}</p>
              <p>{excerpt}</p>
            </Link>
          </PostWrapper>
        ))}
      </IndexWrapper>
    </Layout>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 200)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
        }
        fields {
          slug
        }
      }
    }
  }
`;
