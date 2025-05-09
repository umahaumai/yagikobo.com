import Md from '@/components/HtmlAst';
import SubHeader from '@/components/SubHeader';
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';

export default function Product() {
  const data = useStaticQuery(graphql`
    query productQuery {
      allMdx(
        filter: { frontmatter: { category: { eq: "product" }, open: { eq: true } } }
        sort: { frontmatter: { updatedAt: DESC } }
      ) {
        nodes {
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
          excerpt(pruneLength: 200)
          body
        }
      }
    }
  `);

  return (
    <Box>
      <SubHeader title="製品・サービス" />
      <Box>
        {!data.allMdx.nodes.length && <Typography>coming soon...</Typography>}
        {data.allMdx.nodes.map((node: Queries.productQueryQuery['allMdx']['nodes'][0]) => (
          <Card key={node.id} component="article" sx={{ mb: 4 }}>
            {node.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData && (
              <CardHeader
                avatar={
                  <GatsbyImage
                    image={node.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData}
                    alt={node.frontmatter?.title || ''}
                  />
                }
                title={<Typography variant="h3">{node.frontmatter?.title}</Typography>}
              />
            )}
            <CardContent
              component={Link}
              to={`/product/${node.frontmatter?.slug}`}
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                p: 1,
              }}
            >
              <Typography
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  maxHeight: '400px',
                  maskImage: 'linear-gradient(to bottom, black calc(100% - 100px), transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black calc(100% - 100px), transparent 100%)',
                }}
                component="div"
              >
                <Md body={node.body} variant="list" />
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <Typography>更新日: {dayjs(node.frontmatter?.updatedAt).format('YYYY/MM/DD')}</Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
