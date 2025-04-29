import SubHeader from '@/components/SubHeader';
import { MailOutlineRounded } from '@mui/icons-material';
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
          body
        }
      }
    }
  `);

  console.log(data.allMdx.nodes);

  return (
    <Box>
      <SubHeader title="お知らせ" />
      <Box>
        {data.allMdx.nodes.map((node: Queries.infoQueryQuery['allMdx']['nodes'][0]) => (
          <Card key={node.id}>
            {node.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData && (
              <CardHeader
                avatar={
                  <GatsbyImage
                    image={node.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData}
                    alt={node.frontmatter?.title || ''}
                  />
                }
                title={node.frontmatter?.title}
              />
            )}
            <CardContent>
              <Typography>{node.body}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
