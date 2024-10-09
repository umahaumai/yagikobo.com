import { MdxWrapper } from '@/blog/components/MdxProider';
import content from '@/contents/info/2024-10-05_hp-open.mdx';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

export default function Info() {
  const data = useStaticQuery(graphql`
    query infoTestQuery {
      mdx(id: { eq: "434d21d3-62ef-5135-87bf-e2d0be7ceb39" }) {
        frontmatter {
          title
        }
        internal {
          contentFilePath
        }
        body
      }
    }`);
  console.log(data);
  console.log(content());

  return <MdxWrapper>{content()}</MdxWrapper>;
}

// export const query = graphql`
//   infoTestQuery($id: String!) {
//     mdx(id: { eq: $id }) {
//       frontmatter {
//         title
//       }
//     }
//   }`;
