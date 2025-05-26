import Md from '@/components/HtmlAst';
import SubHeader from '@/components/SubHeader';
import { Box, Divider, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { type PageProps, graphql } from 'gatsby';
import React, { useEffect } from 'react';

export const query = graphql`
  query mdxQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        slug
        title
        category
        createdAt
        updatedAt
        thumbnail { 
          id
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 120)
          }
        }
      }
      body
    }
  }
`;

interface MdxProps extends PageProps<Queries.mdxQueryQuery> {}

export const Head = ({
  data: {
    mdx: {
      frontmatter: { title },
    },
  },
}: MdxProps) => {
  return <title>{title} - 株式会社やぎ工房</title>;
};

export default function Mdx({ data }: MdxProps) {
  // 画面表示時に頁のトップにスクロールする
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <SubHeader />
      <Md body={data.mdx?.body} />
      <Divider sx={{ my: 2 }} />
      <Typography variant="body2" sx={{ textAlign: 'right' }}>
        更新日: {dayjs(data.mdx?.frontmatter?.updatedAt).format('YYYY-MM-DD')}
      </Typography>
    </Box>
  );
}
