import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BFUiyRVg.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_BuTH00o5.mjs';
import { $ as $$Layout, a as $$Link, d as $$Icon } from '../chunks/Layout_uzC0KLCE.mjs';
import { $ as $$PageHead } from '../chunks/PageHead_DmYM0Kcb.mjs';
import { b as badgeVariants } from '../chunks/badge_B-g86QLu.mjs';
import { r as getSortedTags } from '../chunks/data-utils_BL2f5cBZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const sortedTags = await getSortedTags();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "max-w-3xl" }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [{ label: "Tags", icon: "lucide:tags" }] })} ${maybeRenderHead()}<div class="flex flex-col gap-4"> <div class="flex flex-wrap gap-2"> ${sortedTags.map(({ tag, count }) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "href": `/tags/${tag}`, "class": badgeVariants({ variant: "muted" }) }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:hash", "class": "size-3" })} ${tag}<span class="text-muted-foreground ml-1.5">(${count})</span> ` })}`)} </div> </div> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "PageHead", $$PageHead, { "slot": "head", "title": "Tags" })}` })}`;
}, "/home/advadmin/CODES/Project-Nirv/src/pages/tags/index.astro", void 0);

const $$file = "/home/advadmin/CODES/Project-Nirv/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
