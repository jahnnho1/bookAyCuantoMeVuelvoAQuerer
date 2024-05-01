import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.github.com/jahnnho',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [() => async tree => {
      for (const node of tree.children) {
        if (node.tagName === 'pre' && node.properties && node.properties.className) {
          node.properties.className.push('mockup-code');
        }
        if (node.tagName === 'blockquote' && node.properties) {
          node.properties.className = ['alert'];
        }
      }
    }, rehypeKatex]
  },
  output: "server",
  adapter: netlify()
});