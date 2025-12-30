import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_BFUiyRVg.mjs';
import { $ as $$BlogCard } from '../chunks/BlogCard_Dt3bM4RR.mjs';
import { $ as $$Layout, a as $$Link, b as buttonVariants } from '../chunks/Layout_uzC0KLCE.mjs';
import { $ as $$PageHead } from '../chunks/PageHead_DmYM0Kcb.mjs';
import { S as SITE } from '../chunks/consts_CDRqZ4y9.mjs';
import { u as getRecentPosts } from '../chunks/data-utils_BL2f5cBZ.mjs';
import { g as getEntry, r as renderEntry } from '../chunks/_astro_content_ks1qm1Wz.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blog = await getRecentPosts(SITE.featuredPostCount);
  const homeContent = await getEntry("home", "home");
  const { Content } = homeContent ? await renderEntry(homeContent) : { Content: null };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "max-w-3xl" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="rounded-lg border hover-lift animate-slide-up"> <div class="flex flex-col items-center space-y-4 p-6"> <img src="/static/logo.png" alt="Project NIRV Logo" class="w-full max-w-md aspect-auto drop-shadow-lg"> <div class="flex flex-col space-y-1.5 text-center"> <h3 class="text-3xl leading-none font-medium">Project NIRV</h3> <p class="text-muted-foreground text-sm"> <span class="font-medium">Non-Linear Intelligence Research Vector</span> </p> </div> </div> <div class="p-6 pt-0"> <div class="prose text-sm"> ${Content && renderTemplate`${renderComponent($$result2, "Content", Content, {})}`} </div> </div> </section> <section class="flex flex-col gap-y-4 animate-slide-up"> <h2 class="text-2xl font-medium">Latest Research</h2> ${blog.length > 0 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <ul class="flex flex-col gap-y-4"> ${blog.map((post) => renderTemplate`<li> ${renderComponent($$result3, "BlogCard", $$BlogCard, { "entry": post })} </li>`)} </ul> <div class="flex justify-center"> ${renderComponent($$result3, "Link", $$Link, { "href": "/blog", "class": buttonVariants({ variant: "ghost" }) + " group" }, { "default": async ($$result4) => renderTemplate`
See all research <span class="ml-1.5 transition-transform group-hover:translate-x-1">&rarr;</span> ` })} </div> ` })}` : renderTemplate`<div class="flex flex-col items-center justify-center py-16 px-4 rounded-lg border border-blue-600/30 bg-slate-950/50"> <div class="flex items-center gap-2 mb-3"> <span class="text-blue-400 text-lg font-medium">Still Researching</span> <div class="flex gap-1"> <span class="w-2 h-2 bg-blue-400 rounded-full animate-thinking-dots" style="animation-delay: 0s"></span> <span class="w-2 h-2 bg-blue-400 rounded-full animate-thinking-dots" style="animation-delay: 0.2s"></span> <span class="w-2 h-2 bg-blue-400 rounded-full animate-thinking-dots" style="animation-delay: 0.4s"></span> </div> </div> <p class="text-slate-400 text-sm text-center max-w-md">
New insights and research articles are being compiled. Check back soon for data-backed analysis.
</p> </div>`} </section> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "PageHead", $$PageHead, { "slot": "head", "title": "Home" })}` })}`;
}, "/home/advadmin/CODES/Project-Nirv/src/pages/index.astro", void 0);

const $$file = "/home/advadmin/CODES/Project-Nirv/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
