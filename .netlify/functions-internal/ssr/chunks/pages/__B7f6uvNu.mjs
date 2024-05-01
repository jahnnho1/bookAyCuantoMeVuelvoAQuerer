/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent } from '../astro_DZNO2zDg.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$BaseCard, a as $$BaseLayout } from './__BSIiDh9R.mjs';

const $$Astro = createAstro("https://www.github.com/jahnnho");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "PageID": "blog" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BaseCard", $$BaseCard, { "title": post.data.title, "image": post.data.image, "pubDate": post.data.pubDate, "badge": post.data.badge, "tags": post.data.tags, "isBlog": "true" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, {})} ` })} ` })}`;
}, "/home/clymo/proyectos/lectorLibro/src/pages/blog/[...slug].astro", void 0);

const $$file = "/home/clymo/proyectos/lectorLibro/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
