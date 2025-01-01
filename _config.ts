import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import mdx from "lume/plugins/mdx.ts";
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

import highlight from 'lume/plugins/code_highlight.ts';

const site = lume({
  server: {
    port: 4000
  },
  prettyUrls: false,
  emptyDest: false
});

site.use(jsx());
site.use(highlight({
  theme: [
    {
      name: 'androidstudio',
      path: '/assets/styles/androidstudio.css'
    },
    {
      name: 'atom-one-dark',
      path: '/assets/styles/code_theme.css'
    },
    {
      name: 'base16-railscasts',
      path: '/assets/styles/railscasts.min.css'
    }
  ]
}));

site.use(mdx({
  jsxImportSource: 'preact',
  rehypePlugins: [rehypeHighlight],
  remarkPlugins: [remarkGfm]
}));

site.copy("./assets/styles", "styles");
site.copy("./assets/images", "images");

site.copy("./assets/favicon.ico", "favicon.ico");
site.copy("./assets/favicon.png", "favicon.png");

export default site;

