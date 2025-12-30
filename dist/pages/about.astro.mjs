import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BFUiyRVg.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_BuTH00o5.mjs';
import { $ as $$Layout, a as $$Link } from '../chunks/Layout_uzC0KLCE.mjs';
import { $ as $$PageHead } from '../chunks/PageHead_DmYM0Kcb.mjs';
import { g as getEntry, r as renderEntry } from '../chunks/_astro_content_ks1qm1Wz.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const aboutContent = await getEntry("about", "about");
  const { Content } = aboutContent ? await renderEntry(aboutContent) : { Content: null };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "max-w-3xl" }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "About", icon: "lucide:info" }] })} ${maybeRenderHead()}<section> <div class="min-w-full"> <div class="prose mb-8"> ${Content && renderTemplate`${renderComponent($$result2, "Content", Content, {})}`} </div> <div class="mt-12 pt-8 border-t border-blue-600"> <p class="text-muted-foreground text-sm text-center">
Built with the ${renderComponent($$result2, "Link", $$Link, { "href": "https://github.com/jktrn/astro-erudite", "class": "text-foreground", "external": true, "underline": true }, { "default": async ($$result3) => renderTemplate`astro-erudite` })} template by ${renderComponent($$result2, "Link", $$Link, { "href": "https://github.com/jktrn", "class": "text-foreground", "external": true, "underline": true }, { "default": async ($$result3) => renderTemplate`enscribe` })} </p> </div> </div> </section> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "PageHead", $$PageHead, { "slot": "head", "title": "About" })}` })}`;
}, "/home/advadmin/CODES/Project-Nirv/src/pages/about.astro", void 0);

const $$file = "/home/advadmin/CODES/Project-Nirv/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
