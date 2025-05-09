import htmlAst from './htmlAst';
import { parseHtmlAst } from './parseHtmlAst';

interface MdProps {
  body?: string | null;
  variant?: 'list' | 'normal';
}

const Md = ({ body, variant = 'normal' }: MdProps) => {
  if (!body) {
    return null;
  }
  const ast = parseHtmlAst(body) as unknown as Record<string, unknown>;
  return htmlAst(ast, variant);
};

export default Md;
