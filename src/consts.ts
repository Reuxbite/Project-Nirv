export const SITE = {
  title: "Project NIRV",
  description: "Non-Linear Intelligence Research Vector — structured research and non-linear insight.",
  href: "https://projectnirv.studio",
  locale: "en",
  author: "Reuxbite",
  featuredPostCount: 2,
  postsPerPage: 5,
};

export const NAV_LINKS = [
  { href: "/blog", label: "Research" },
  { href: "/about", label: "About" },
];

// Icons used by the SocialIcons component.
// You can change the URLs or remove items if you want fewer links.
export const ICON_MAP = {
  github: "lucide:github",
  x: "lucide:twitter",
  email: "lucide:mail",
} as const;

export const SOCIAL_LINKS: { href: string; icon: keyof typeof ICON_MAP }[] = [
  {
    href: "https://github.com/Reuxbite",
    icon: "github",
  },
  // Add more if you want:
  // { href: "https://x.com/your-handle", icon: "x" },
  // { href: "mailto:you@example.com", icon: "email" },
];
export const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Research" },
];


export const NIRV_TAGS = [
  "systems",
  "markets",
  "ideas",
  "notes",
] as const;
export type NIRVTag = (typeof NIRV_TAGS)[number];