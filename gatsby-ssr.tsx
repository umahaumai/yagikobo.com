export { wrapPageElement } from './src/app';

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'ja' });
};
