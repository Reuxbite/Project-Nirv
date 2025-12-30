import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BFUiyRVg.mjs';
import { $ as $$BlogCard } from '../../chunks/BlogCard_Dt3bM4RR.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BuTH00o5.mjs';
import { $ as $$PageHead } from '../../chunks/PageHead_DmYM0Kcb.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { ChevronLeftIcon, MoreHorizontalIcon, ChevronRightIcon } from 'lucide-react';
import { c as cn, S as SITE } from '../../chunks/consts_CDRqZ4y9.mjs';
import { b as buttonVariants, $ as $$Layout } from '../../chunks/Layout_uzC0KLCE.mjs';
import { o as groupPostsByYear, q as getAllPosts } from '../../chunks/data-utils_BL2f5cBZ.mjs';
export { renderers } from '../../renderers.mjs';

function Pagination({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: cn("mx-auto flex w-full justify-center", className),
      ...props
    }
  );
}
function PaginationContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "ul",
    {
      "data-slot": "pagination-content",
      className: cn("flex flex-row items-center gap-1", className),
      ...props
    }
  );
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ jsx("li", { "data-slot": "pagination-item", ...props });
}
function PaginationLink({
  className,
  isActive,
  isDisabled,
  size = "icon",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      "aria-current": isActive ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": isActive,
      "data-disabled": isDisabled,
      className: cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size
        }),
        isDisabled && "pointer-events-none opacity-50",
        className
      ),
      ...props
    }
  );
}
function PaginationPrevious({
  className,
  isDisabled,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    PaginationLink,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pl-2.5", className),
      isDisabled,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ChevronLeftIcon, {}),
        /* @__PURE__ */ jsx("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function PaginationNext({
  className,
  isDisabled,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    PaginationLink,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pr-2.5", className),
      isDisabled,
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ jsx(ChevronRightIcon, {})
      ]
    }
  );
}
function PaginationEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "span",
    {
      "aria-hidden": true,
      "data-slot": "pagination-ellipsis",
      className: cn("flex size-9 items-center justify-center", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx(MoreHorizontalIcon, { className: "size-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
const PaginationComponent = ({
  currentPage,
  totalPages,
  baseUrl
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const getPageUrl = (page) => {
    if (page === 1) return baseUrl;
    return `${baseUrl}${page}`;
  };
  return /* @__PURE__ */ jsx(Pagination, { children: /* @__PURE__ */ jsxs(PaginationContent, { className: "flex-wrap", children: [
    /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(
      PaginationPrevious,
      {
        href: currentPage > 1 ? getPageUrl(currentPage - 1) : void 0,
        isDisabled: currentPage === 1
      }
    ) }),
    pages.map((page) => /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(
      PaginationLink,
      {
        href: getPageUrl(page),
        isActive: page === currentPage,
        children: page
      }
    ) }, page)),
    totalPages > 5 && /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(PaginationEllipsis, {}) }),
    /* @__PURE__ */ jsx(PaginationItem, { children: /* @__PURE__ */ jsx(
      PaginationNext,
      {
        href: currentPage < totalPages ? getPageUrl(currentPage + 1) : void 0,
        isDisabled: currentPage === totalPages
      }
    ) })
  ] }) });
};

const $$Astro = createAstro("https://astro-erudite.vercel.app");
async function getStaticPaths({
  paginate
}) {
  const allPosts = await getAllPosts();
  return paginate(allPosts, { pageSize: SITE.postsPerPage });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const postsByYear = groupPostsByYear(page.data);
  const years = Object.keys(postsByYear).sort((a, b) => parseInt(b) - parseInt(a));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "max-w-3xl" }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Research", href: "/blog", icon: "lucide:library-big" },
    { label: `Page ${page.currentPage}`, icon: "lucide:book-copy" }
  ] })} ${maybeRenderHead()}<div class="flex min-h-[calc(100vh-18rem)] flex-col gap-y-8"> ${years.length > 0 ? years.map((year) => renderTemplate`<section class="flex flex-col gap-y-4"> <div class="font-medium">${year}</div> <ul class="flex flex-col gap-4"> ${postsByYear[year].map((post) => renderTemplate`<li> ${renderComponent($$result2, "BlogCard", $$BlogCard, { "entry": post })} </li>`)} </ul> </section>`) : renderTemplate`<div class="flex flex-col items-center justify-center py-24 px-4 rounded-lg border border-blue-600/30 bg-slate-950/50"> <div class="flex items-center gap-2 mb-3"> <span class="text-blue-400 text-xl font-medium">Still Researching</span> <div class="flex gap-1"> <span class="w-2 h-2 bg-blue-400 rounded-full animate-thinking-dots" style="animation-delay: 0s"></span> <span class="w-2 h-2 bg-blue-400 rounded-full animate-thinking-dots" style="animation-delay: 0.2s"></span> <span class="w-2 h-2 bg-blue-400 rounded-full animate-thinking-dots" style="animation-delay: 0.4s"></span> </div> </div> <p class="text-slate-400 text-center max-w-md">
New insights and research articles are being compiled. Check back soon for data-backed analysis on systems, markets, and ideas.
</p> </div>`} </div> ${renderComponent($$result2, "PaginationComponent", PaginationComponent, { "currentPage": page.currentPage, "totalPages": page.lastPage, "baseUrl": "/blog/", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/pagination", "client:component-export": "default" })} `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "PageHead", $$PageHead, { "slot": "head", "title": "Research" })}` })}`;
}, "/home/advadmin/CODES/Project-Nirv/src/pages/blog/[...page].astro", void 0);

const $$file = "/home/advadmin/CODES/Project-Nirv/src/pages/blog/[...page].astro";
const $$url = "/blog/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
