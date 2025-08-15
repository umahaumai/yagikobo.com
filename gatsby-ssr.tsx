export { wrapPageElement } from './src/app';
import type { GatsbySSR } from 'gatsby';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: 'ja' });

  // 検索エンジンからのクローリングを完全に禁止
  setHeadComponents([
    <meta key="robots" name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />,
    <meta key="googlebot" name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />,
    <meta key="bingbot" name="bingbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />,
  ]);
};
