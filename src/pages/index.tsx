import template from '@/templates/top';
import type { HeadFC } from 'gatsby';
// biome-ignore lint/style/useImportType: <explanation>
import * as React from 'react';

export default template;

export const Head: HeadFC = () => <title>Home Page</title>;
