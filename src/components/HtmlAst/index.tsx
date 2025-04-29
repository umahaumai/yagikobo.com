import HtmlAst from './HtmlAst';
import { parseHtmlAst } from './parseHtmlAst';

const Md = ({ body }: { body?: string | null }) => {
  if (!body) {
    return null;
  }
  // HtmlAst(parseHtmlAst(node.body))
  const ast = parseHtmlAst(body) as unknown as Record<string, unknown>;
  return HtmlAst(ast);
};

export default Md;
