import { components } from '@/blog/components/MdxProider';
import type { Root } from 'hast';
// biome-ignore lint/style/useImportType: <explanation>
import * as React from 'react';
import * as prod from 'react/jsx-runtime';
import rehypeReact from 'rehype-react';
import type { Options } from 'rehype-react';

const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };
export const HtmlAst = new (
  rehypeReact as unknown as { new (options: Options): { compiler: (tree: Root) => JSX.Element } }
)({
  ...production,
  components: {
    ...components,
    // リスト表示に利用する関係でH1タグが乱立するため、H2タグに置換している
    h1: (props) => <h2 style={{ fontSize: '1.8rem', fontWeight: 500, marginBottom: '1rem' }} {...props} />,
  },
}).compiler;

export default (tree: Record<string, unknown>) => HtmlAst(tree, {});
