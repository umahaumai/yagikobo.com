import path from 'node:path';
import type { GatsbyNode } from 'gatsby';
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

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions }) => {
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
