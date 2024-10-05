import type { GatsbyBrowser } from 'gatsby';
export { wrapPageElement } from './src/app';

// export const onClientEntry: GatsbyBrowser['onClientEntry'] = () => {
//   window.onload = () => {
//     const link = document.createElement('link')
//     link.rel = 'stylesheet'
//     link.href = 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,600,700&display=swap'
//     document.head.appendChild(link)
//   }
// }
