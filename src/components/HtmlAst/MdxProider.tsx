import { MDXProvider } from '@mdx-js/react';
import type { Props } from '@mdx-js/react/lib';
import { Divider, Link, Typography } from '@mui/material';
import React from 'react';

export const components = {
  h1: (props: Readonly<Props>) => (
    <>
      <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: 'bold' }} {...props} />
      <Divider />
    </>
  ),
  h2: (props: Readonly<Props>) => (
    <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 'bold', mt: 2 }} {...props} />
  ),
  h3: (props: Readonly<Props>) => <Typography variant="h3" sx={{ mt: 2 }} {...props} />,
  h4: (props: Readonly<Props>) => <Typography variant="h4" {...props} />,
  h5: (props: Readonly<Props>) => <Typography variant="h5" {...props} />,
  h6: (props: Readonly<Props>) => <Typography variant="h6" {...props} />,
  thematicBreak: (props: Readonly<Props>) => <Divider {...props} />,
  hr: (props: Readonly<Props>) => <Divider {...props} />,
  a: (props: Readonly<Props>) => <Link {...props} />,
  p: (props: Readonly<Props>) => <Typography variant="body1" sx={{ mt: 2, whiteSpace: 'pre-line' }} {...props} />,
  strong: (props: Readonly<Props>) => <Typography variant="body1" component="strong" {...props} />,
  ul: (props: Readonly<Props>) => <Typography variant="body1" component="ul" {...props} />,
  ol: (props: Readonly<Props>) => <Typography variant="body1" component="ol" {...props} />,
  li: (props: Readonly<Props>) => (
    <Typography variant="body1" component="li" sx={{ whiteSpace: 'pre-line' }} {...props} />
  ),
  blockquote: (props: Readonly<Props>) => <Typography variant="body1" component="blockquote" {...props} />,
  code: (props: Readonly<Props>) => <Typography variant="body1" component="code" {...props} />,
  inlineCode: (props: Readonly<Props>) => <Typography variant="body1" component="code" {...props} />,
  em: (props: Readonly<Props>) => <Typography variant="body1" component="em" {...props} />,
  pre: (props: Readonly<Props>) => <Typography variant="body1" component="pre" {...props} />,
};

export const MdxWrapper = ({ children }: Readonly<Props>) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
