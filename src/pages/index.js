import React from 'react';
import { Layout } from '../components/Layout';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

const IndexWrapper = styled.main`
  border: 3px dotted orange;
  padding: 5px;
`;

const PostWrapper = styled.div`
  border: 1px solid rebeccapurple;
`;

export default ({ data }) => {
  return (
    <Layout>
      <IndexWrapper>
        {data.allMdx.nodes.map(({ excerpt, frontmatter, fields, id }) => (
          <PostWrapper key={id}>
            <Link to={fields.slug}>
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
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
