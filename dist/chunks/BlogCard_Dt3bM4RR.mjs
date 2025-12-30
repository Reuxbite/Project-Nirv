import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, F as Fragment } from './astro/server_BFUiyRVg.mjs';
import { A as AvatarComponent } from './avatar_BmwIn1Rs.mjs';
import { B as Badge } from './badge_B-g86QLu.mjs';
import { jsx } from 'react/jsx-runtime';
import 'react';
import { Separator as Separator$1 } from 'radix-ui';
import { c as cn, f as formatDate } from './consts_CDRqZ4y9.mjs';
import { h as getCombinedReadingTime, p as parseAuthors, i as isSubpost, l as getSubpostCount } from './data-utils_BL2f5cBZ.mjs';
import { a as $$Link, d as $$Icon } from './Layout_uzC0KLCE.mjs';
import { $ as $$Image } from './_astro_assets_RLxGgUvR.mjs';

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Separator$1.Root,
    {
      "data-slot": "separator-root",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}

const $$Astro = createAstro("https://astro-erudite.vercel.app");
const $$BlogCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { entry } = Astro2.props;
  const formattedDate = formatDate(entry.data.date);
  const readTime = await getCombinedReadingTime(entry.id);
  const authors = await parseAuthors(entry.data.authors ?? []);
  const subpostCount = !isSubpost(entry.id) ? await getSubpostCount(entry.id) : 0;
  return renderTemplate`${maybeRenderHead()}<div class="hover:bg-muted/50 rounded-xl border p-4 transition-all duration-300 ease-in-out hover-lift hover:shadow-lg hover:shadow-blue-500/20"> ${renderComponent($$result, "Link", $$Link, { "href": `/${entry.collection}/${entry.id}`, "class": "flex flex-col gap-4 sm:flex-row" }, { "default": async ($$result2) => renderTemplate`${entry.data.image && renderTemplate`<div class="w-full sm:max-w-3xs sm:shrink-0"> ${renderComponent($$result2, "Image", $$Image, { "src": entry.data.image, "alt": entry.data.title, "width": 1200, "height": 630, "class": "object-cover" })} </div>`}<div class="grow"> <h3 class="mb-1 text-lg font-medium">${entry.data.title}</h3> <p class="text-muted-foreground mb-2 text-sm">${entry.data.description}</p> <div class="text-muted-foreground mb-2 flex flex-wrap items-center gap-x-2 text-xs"> ${authors.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${authors.map((author) => renderTemplate`<div class="flex items-center gap-x-1.5"> ${renderComponent($$result3, "AvatarComponent", AvatarComponent, { "client:load": true, "src": author.avatar, "alt": author.name, "fallback": author.name[0], "className": "size-5 rounded-full", "client:component-hydration": "load", "client:component-path": "@/components/ui/avatar", "client:component-export": "default" })} <span>${author.name}</span> </div>`)}${renderComponent($$result3, "Separator", Separator, { "orientation": "vertical", "className": "h-4!" })} ` })}`} <span>${formattedDate}</span> ${renderComponent($$result2, "Separator", Separator, { "orientation": "vertical", "className": "h-4!" })} <span>${readTime}</span> ${subpostCount > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Separator", Separator, { "orientation": "vertical", "className": "h-4!" })} <span class="flex items-center gap-1"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:file-text", "class": "size-3" })} ${subpostCount} subpost${subpostCount === 1 ? "" : "s"} </span> ` })}`} </div> ${entry.data.tags && renderTemplate`<div class="flex flex-wrap gap-2"> ${entry.data.tags.map((tag) => renderTemplate`${renderComponent($$result2, "Badge", Badge, { "variant": "muted", "className": "flex items-center gap-x-1" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:hash", "class": "size-3" })} ${tag}` })}`)} </div>`} </div> ` })} </div>`;
}, "/home/advadmin/CODES/Project-Nirv/src/components/BlogCard.astro", void 0);

export { $$BlogCard as $ };
