import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BFUiyRVg.mjs';
import { $ as $$AuthorCard } from '../chunks/AuthorCard_B8racoMA.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_BuTH00o5.mjs';
import { $ as $$PageHead } from '../chunks/PageHead_DmYM0Kcb.mjs';
import { $ as $$Layout } from '../chunks/Layout_uzC0KLCE.mjs';
import { g as getAllAuthors } from '../chunks/data-utils_BL2f5cBZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const authors = await getAllAuthors();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "max-w-3xl" }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Authors", icon: "lucide:users" }] })} ${authors.length > 0 ? renderTemplate`${maybeRenderHead()}<ul class="flex flex-col gap-4"> ${authors.map((author) => renderTemplate`<li> ${renderComponent($$result2, "AuthorCard", $$AuthorCard, { "author": author })} </li>`)} </ul>` : renderTemplate`<p class="text-muted-foreground text-center">No authors found.</p>`}`, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "PageHead", $$PageHead, { "slot": "head", "title": "Authors" })}` })}`;
}, "/home/advadmin/CODES/Project-Nirv/src/pages/authors/index.astro", void 0);

const $$file = "/home/advadmin/CODES/Project-Nirv/src/pages/authors/index.astro";
const $$url = "/authors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
