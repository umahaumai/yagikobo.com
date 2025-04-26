import { MdxWrapper } from '@/blog/components/MdxProider';
import { type PageProps, graphql } from 'gatsby';
import React, { useEffect } from 'react';

export const query = graphql`
  query mdxInfo($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      internal {
        contentFilePath
      }
      body
    }
  }
`;

export interface InfoProps extends PageProps<Queries.mdxInfoQuery> {}

export const Head = ({ data }: InfoProps) => {
  return <title>{data.mdx?.frontmatter?.title} - 株式会社やぎ工房</title>;
};

export default function Info({ children }: InfoProps) {
  // 画面表示時に頁のトップにスクロールする
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <MdxWrapper>{children}</MdxWrapper>;
}
