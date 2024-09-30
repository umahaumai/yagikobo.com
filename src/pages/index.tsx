import Blog from '@/blog/Blog';
import type { HeadFC, PageProps } from 'gatsby';
// biome-ignore lint/style/useImportType: <explanation>
import * as React from 'react';

const IndexPage: React.FC<PageProps> = () => {
  return <Blog />;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
