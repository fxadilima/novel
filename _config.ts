import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import mdx from "lume/plugins/mdx.ts";
import a11yEmoji from 'npm:@fec/remark-a11y-emoji';
import rehypeRemoveComments from 'npm:rehype-remove-comments@5';
import rehypeHighlight from 'https://esm.sh/rehype-highlight@7.0.0';

const site = lume();

site.use(jsx());
site.use(mdx({
    remarkPlugins: [a11yEmoji],
    rehypePlugins: [
        rehypeRemoveComments,
        rehypeHighlight
    ],
}));

site.copy('book.svg');
site.copy('public/images', 'images');
site.copy('public/styles', 'styles');

export default site;
