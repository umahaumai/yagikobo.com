import { MailOutlineRounded } from '@mui/icons-material';
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';

export default function Top() {
  const data: Queries.topQueryQuery = useStaticQuery(graphql`
    query topQuery {
      logo: file(relativePath: {eq: "logo.png"}) {
        childImageSharp {
          gatsbyImageData( width: 400)
        }
      }
      news: allMdx(
        filter: {frontmatter: {category: {eq: "info"}, open: {eq: true}}},
        limit: 5,
        sort: {frontmatter: {updatedAt: DESC}}) 
      {
        nodes {
          id
          tableOfContents
          frontmatter {
            slug
            title
            category
            cteatedAt
            updatedAt
            thumbnail {
              id
              childImageSharp {
                gatsbyImageData(layout: FIXED, width: 120)
              }
            }
          }
        }
      }
    }`);
  return (
    <>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
        component="h1"
      >
        {data.logo?.childImageSharp?.gatsbyImageData && (
          <GatsbyImage image={data.logo.childImageSharp.gatsbyImageData} alt="Yagikobo.inc" />
        )}
        <Typography sx={{ fontSize: '3rem', fontWeight: 'bold', letterSpacing: '0.15em', my: 2 }}>
          Yagikobo.inc
        </Typography>
      </Box>
      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle2">NEWS</Typography>
        <Typography variant="h2" sx={{ mb: 1 }}>
          ニュース
        </Typography>

        <List>
          {data.news.nodes.map((node) => (
            <ListItemButton
              key={node.id}
              component={Link}
              to={`/${node.frontmatter?.category}/${node.frontmatter?.slug}`}
            >
              <ListItemAvatar>
                {node.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData?.images?.fallback?.src ? (
                  <Avatar
                    src={node.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images.fallback.src}
                    alt={node.frontmatter.title ?? 'avatar'}
                  />
                ) : (
                  <Avatar>
                    <MailOutlineRounded />
                  </Avatar>
                )}
              </ListItemAvatar>
              <ListItem>
                <ListItemText
                  primary={node.frontmatter?.title}
                  secondary={dayjs(node.frontmatter?.updatedAt).format('YYYY.MM.DD')}
                  slotProps={{
                    primary: {
                      variant: 'subtitle1',
                    },
                  }}
                />
              </ListItem>
            </ListItemButton>
          ))}
        </List>
      </Paper>
    </>
  );
}
