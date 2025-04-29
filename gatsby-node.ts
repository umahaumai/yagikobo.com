import path from 'node:path';
import type { GatsbyNode } from 'gatsby';
import { graphql } from 'gatsby';
import readingTime from 'reading-time';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  });
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions: { createPage } }) => {
  const result = (await graphql(`
    query CreatePagesQuery {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            slug
            category
          }
          internal {
            contentFilePath
          }
        }
      }
    }`)) as {
    data?: Queries.CreatePagesQueryQuery;
  };

  if (!result.data?.allMdx.nodes) {
    return;
  }

  for (const node of result.data.allMdx.nodes) {
    const category = node.frontmatter?.category || 'blog';
    if (!category) {
      continue;
    }
    createPage({
      path: `/${category}/${node.frontmatter?.slug}`,
      component: path.resolve(`./src/templates/mdx.tsx?__contentFilePath=${node.internal?.contentFilePath}`),
      context: {
        ...node,
      },
    });
  }
};

export const onCreateNode: GatsbyNode['onCreateNode'] = async ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    createNodeField({
      node,
      name: 'timeToRead',
      // @ts-ignore-next-line
      value: readingTime(node.body),
    });
  }
};
