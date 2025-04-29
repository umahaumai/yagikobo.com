import { type HeadFC, Link, type PageProps } from 'gatsby';
// biome-ignore lint/style/useImportType: <explanation>
import * as React from 'react';

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};

const NotFoundPage = (props: PageProps) => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>お探しのページが見つかりません。</h1>
      <p style={paragraphStyles}>
        当サイトをご覧頂きありがとうございます。
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>{props.path}</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
