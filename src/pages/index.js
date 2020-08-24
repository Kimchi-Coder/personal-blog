import React from "react";
import { Layout } from "../components/Layout";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import "./index.css";

const IndexWrapper = styled.main`
  padding: 5px;
`;

const PostWrapper = styled.div`
  box-shadow: 3px 3px 10px gray;
  margin: 15px 0;
  padding: 10px 15px;
  & > a {
    text-decoration: none;
    color: black;
  }
  & > a:visited {
    color: black;
  }
`;

const StyledPostTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  & ::before {
    content: "{";
    margin-right: 5px;
    color: orange;
  }
  & ::after {
    content: "}";
    margin-left: 5px;
    color: orange;
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
          date
        }
        fields {
          slug
        }
      }
    }
  }
`;
