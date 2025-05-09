import { Box, Typography } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

interface SubHeaderProps {
  title?: string;
}

const SubHeader = ({ title }: SubHeaderProps) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: {eq: "yagikobo.png"}) {
        childImageSharp {
          gatsbyImageData( width: 400)
        }
      }
    }
  `);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} component="h1">
      {data.logo?.childImageSharp?.gatsbyImageData && (
        <Box>
          <GatsbyImage
            style={{ width: 200, height: 200 }}
            image={data.logo.childImageSharp.gatsbyImageData}
            alt="Yagi Kobo.inc"
          />
        </Box>
      )}
      {title && (
        <Typography variant="h1" component="p" sx={{ my: 1 }}>
          {title}
        </Typography>
      )}
    </Box>
  );
};

export default SubHeader;
