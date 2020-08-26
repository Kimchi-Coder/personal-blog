import { MDXProvider } from '@mdx-js/react';
import { Code } from './src/components/Code';
import React from 'react';

const components = {
  // h2: ({ children }) => <h2 style={{ color: 'teal' }}>{children}</h2>,
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
      style={{
        borderLeft: '3px solid rgb(8, 217, 214)',
        paddingLeft: '20px',
        color: 'white',
      }}
    />
  ),
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
