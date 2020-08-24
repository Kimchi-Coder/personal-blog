import { MDXProvider } from '@mdx-js/react';
import { Code } from './src/components/Code';
import React from 'react';

const components = {
  h2: ({ children }) => <h2 style={{ color: 'rebeccapurple' }}>{children}</h2>,
  'p.inlineCode': (props) => (
    <code style={{ backgroundColor: 'lightgray' }} {...props} />
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace('language-', '')}
          {...props}
        />
      );
    }
  },
  blockquote: (props) => (
    <blockquote
      {...props}
      style={{ borderLeft: '3px solid rebeccapurple', paddingLeft: '20px' }}
    />
  ),
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
