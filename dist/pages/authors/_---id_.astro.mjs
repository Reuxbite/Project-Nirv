import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BFUiyRVg.mjs';
import { $ as $$AuthorCard } from '../../chunks/AuthorCard_B8racoMA.mjs';
import { $ as $$BlogCard } from '../../chunks/BlogCard_Dt3bM4RR.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BuTH00o5.mjs';
import { $ as $$PageHead } from '../../chunks/PageHead_DmYM0Kcb.mjs';
import { $ as $$Layout } from '../../chunks/Layout_uzC0KLCE.mjs';
import { a as getPostsByAuthor, g as getAllAuthors } from '../../chunks/data-utils_BL2f5cBZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astro-erudite.vercel.app");
async function getStaticPaths() {
  const authors = await getAllAuthors();
  return authors.map((author) => ({
    params: { id: author.id },
    props: { author }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { author } = Astro2.props;
  const authorPosts = await getPostsByAuthor(author.id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "max-w-3xl" }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { href: "/authors", label: "Authors", icon: "lucide:users" },
    { label: author.data.name, icon: "lucide:user" }
  ] })} ${maybeRenderHead()}<section> ${renderComponent($$result2, "AuthorCard", $$AuthorCard, { "author": author })} </section> <section class="flex flex-col gap-y-4"> <h2 class="text-2xl font-medium">Posts by ${author.data.name}</h2> ${authorPosts.length > 0 ? renderTemplate`<ul class="flex flex-col gap-4"> ${authorPosts.filter((post) => !post.data.draft).map((post) => renderTemplate`<li> ${renderComponent($$result2, "BlogCard", $$BlogCard, { "entry": post })} </li>`)} </ul>` : renderTemplate`<p class="text-muted-foreground">
No posts available from this author.
</p>`} </section> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "PageHead", $$PageHead, { "slot": "head", "title": `${author.data.name} (Author)`, "description": author.data.bio || `Profile of ${author.data.name}.`, "noindex": true })}` })}`;
}, "/home/advadmin/CODES/Project-Nirv/src/pages/authors/[...id].astro", void 0);

const $$file = "/home/advadmin/CODES/Project-Nirv/src/pages/authors/[...id].astro";
const $$url = "/authors/[...id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
