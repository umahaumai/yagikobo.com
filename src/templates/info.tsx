import HtmlAst from '@/components/HtmlAst';
import { parseHtmlAst } from '@/components/HtmlAst/parseHtmlAst';
import SubHeader from '@/components/SubHeader';
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';

export default function Info() {
  const data = useStaticQuery(graphql`
    query infoQuery {
      allMdx(
        filter: { frontmatter: { category: { eq: "info" } } }
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
      <SubHeader title="お知らせ" />
      <Box>
        {data.allMdx.nodes.map((node: Queries.infoQueryQuery['allMdx']['nodes'][0]) => (
          <Card key={node.id} component="article">
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
              to={`/info/${node.frontmatter?.slug}`}
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
              <Typography>
                {node.body ? HtmlAst(parseHtmlAst(node.body) as unknown as Record<string, unknown>) : ''}
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
