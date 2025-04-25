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
      logo: file(relativePath: {eq: "yagikobo.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, width: 800)
        }
      }
      news: allMdx(
        filter: {frontmatter: {category: {eq: "news"}}},
        limit: 5,
        sort: {frontmatter: {updatedAt: DESC}}) 
      {
        nodes {
          id
          internal {
            contentFilePath
            content
            contentDigest
            type
          }
          tableOfContents
          frontmatter {
            slug
            title
            cteatedAt
            updatedAt
            thumbnail {
              id
              childImageSharp {
                gatsbyImageData(layout: FIXED, width: 120)
              }
            }
          }
          fields {
            timeToRead {
              text
              time
              words
              minutes
            }
          }
        }
      }
    }`);
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', mt: -15 }} component="h1">
        {data.logo?.childImageSharp?.gatsbyImageData && (
          <GatsbyImage image={data.logo.childImageSharp.gatsbyImageData} alt="Yagi Kobo.inc" />
        )}
      </Box>
      <Paper sx={{ p: 2, mt: 6 }}>
        <Typography variant="subtitle2">NEWS</Typography>
        <Typography variant="h2" sx={{ mb: 1 }}>
          ニュース
        </Typography>

        <List>
          {data.news.nodes.map((node) => (
            <ListItemButton key={node.id} component={Link} to={`/info/${node.frontmatter?.slug}`}>
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
                  primaryTypographyProps={{ variant: 'subtitle1' }}
                />
              </ListItem>
            </ListItemButton>
          ))}
        </List>
      </Paper>
    </>
  );
}
