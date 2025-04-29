import { components } from '@/blog/components/MdxProider';
import type { Root } from 'hast';
import * as prod from 'react/jsx-runtime';
import rehypeReact from 'rehype-react';
import type { Options } from 'rehype-react';

const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };
export const HtmlAst = new (
  rehypeReact as unknown as { new (options: Options): { compiler: (tree: Root) => JSX.Element } }
)({
  ...production,
  components,
}).compiler;

export default (tree: Record<string, unknown>) => HtmlAst(tree, {});
