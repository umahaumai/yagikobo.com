import { MdxWrapper } from '@/components/HtmlAst/MdxProider';
import SubHeader from '@/components/SubHeader';
import { Box } from '@mui/material';
import type { PageProps } from 'gatsby';
import React, { useEffect } from 'react';

export interface InfoProps extends PageProps<unknown, Queries.CreatePagesQueryQuery['allMdx']['nodes'][0]> {}

export const Head = ({ pageContext }: InfoProps) => {
  return <title>{pageContext?.frontmatter?.title} - 株式会社やぎ工房</title>;
};

export default function Info({ children }: InfoProps) {
  // 画面表示時に頁のトップにスクロールする
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <SubHeader />
      <MdxWrapper>{children}</MdxWrapper>
    </Box>
  );
}
