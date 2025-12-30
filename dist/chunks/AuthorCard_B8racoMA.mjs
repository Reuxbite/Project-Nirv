import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_BFUiyRVg.mjs';
import { a as $$Link, c as $$SocialIcons } from './Layout_uzC0KLCE.mjs';
import { A as AvatarComponent } from './avatar_BmwIn1Rs.mjs';
import { c as cn } from './consts_CDRqZ4y9.mjs';

const $$Astro = createAstro("https://astro-erudite.vercel.app");
const $$AuthorCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthorCard;
  const { author } = Astro2.props;
  const { name, avatar, bio, pronouns } = author.data;
  const currentPath = Astro2.url.pathname;
  const isAuthorPage = currentPath === `/authors/${author.id}`;
  const socialLinks = [
    author.data.website && { href: author.data.website, label: "Website" },
    author.data.github && { href: author.data.github, label: "GitHub" },
    author.data.twitter && { href: author.data.twitter, label: "Twitter" },
    author.data.linkedin && { href: author.data.linkedin, label: "LinkedIn" },
    author.data.mail && { href: `mailto:${author.data.mail}`, label: "Email" }
  ].filter(Boolean);
  return renderTemplate`${maybeRenderHead()}<div class="has-[a:hover]:bg-muted/50 overflow-hidden rounded-xl border p-4 transition-colors duration-300 ease-in-out"> <div class="flex flex-wrap gap-4"> ${renderComponent($$result, "Link", $$Link, { "href": `/authors/${author.id}`, "class": cn("block", isAuthorPage && "pointer-events-none") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AvatarComponent", AvatarComponent, { "client:load": true, "src": avatar, "alt": `Avatar of ${name}`, "fallback": name[0], "className": cn(
    'size-32 rounded-md [&>[data-slot="avatar-fallback"]]:rounded-md',
    !isAuthorPage && "hover:ring-primary transition-shadow duration-300 hover:cursor-pointer hover:ring-2"
  ), "client:component-hydration": "load", "client:component-path": "@/components/ui/avatar", "client:component-export": "default" })} ` })} <div class="flex grow flex-col justify-between gap-y-4"> <div> <div class="flex flex-wrap items-center gap-x-2"> <h3 class="text-lg font-medium">${name}</h3> ${pronouns && renderTemplate`<span class="text-muted-foreground text-sm">(${pronouns})</span>`} </div> <p class="text-muted-foreground text-sm">${bio}</p> </div> ${renderComponent($$result, "SocialIcons", $$SocialIcons, { "links": socialLinks })} </div> </div> </div>`;
}, "/home/advadmin/CODES/Project-Nirv/src/components/AuthorCard.astro", void 0);

export { $$AuthorCard as $ };
