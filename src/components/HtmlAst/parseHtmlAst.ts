import type { Root } from 'hast';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import parser from 'remark-parse';
import remarkToRehype from 'remark-rehype';
import { type Plugin, unified } from 'unified';

export const parseHtmlAst = (text: string): Root => {
  if (!text) {
    return { type: 'root', children: [] };
  }
  const node = unified().use(parser).parse(text);
  return unified()
    .use(rehypeHighlight)
    .use(remarkToRehype, { allowDangerousHtml: true })
    .use(rehypeRaw as Plugin)
    .use(rehypeStringify as unknown as Plugin)
    .runSync(node) as unknown as Root;
};
