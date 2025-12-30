import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function formatDate(date) {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}
function calculateWordCountFromHtml(html) {
  if (!html) return 0;
  const textOnly = html.replace(/<[^>]+>/g, "");
  return textOnly.split(/\s+/).filter(Boolean).length;
}
function readingTime(wordCount) {
  const minutesRead = Math.ceil(wordCount / 200);
  return `${minutesRead} min read`;
}
function getHeadingMargin(depth) {
  const margins = {
    3: "ml-4",
    4: "ml-8",
    5: "ml-12",
    6: "ml-16"
  };
  return margins[depth] || "";
}

const SITE = {
  title: "Project NIRV",
  description: "Non-Linear Intelligence Research Vector — structured research and non-linear insight.",
  href: "https://projectnirv.studio",
  locale: "en",
  author: "Reuxbite",
  featuredPostCount: 2,
  postsPerPage: 5
};
const NAV_LINKS = [
  { href: "/blog", label: "Research" },
  { href: "/about", label: "About" }
];
const ICON_MAP = {
  github: "lucide:github",
  x: "lucide:twitter",
  email: "lucide:mail"
};
const SOCIAL_LINKS = [
  {
    href: "https://github.com/Reuxbite",
    icon: "github"
  }
  // Add more if you want:
  // { href: "https://x.com/your-handle", icon: "x" },
  // { href: "mailto:you@example.com", icon: "email" },
];

function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map((path, i) => {
    if (i === 0) {
      return removeTrailingForwardSlash(path);
    } else if (i === paths.length - 1) {
      return removeLeadingForwardSlash(path);
    } else {
      return trimSlashes(path);
    }
  }).join("/");
}
function isRemotePath(src) {
  if (!src) return false;
  const trimmed = src.trim();
  if (!trimmed) return false;
  let decoded = trimmed;
  let previousDecoded = "";
  let maxIterations = 10;
  while (decoded !== previousDecoded && maxIterations > 0) {
    previousDecoded = decoded;
    try {
      decoded = decodeURIComponent(decoded);
    } catch {
      break;
    }
    maxIterations--;
  }
  if (/^[a-zA-Z]:/.test(decoded)) {
    return false;
  }
  if (decoded[0] === "/" && decoded[1] !== "/" && decoded[1] !== "\\") {
    return false;
  }
  if (decoded[0] === "\\") {
    return true;
  }
  if (decoded.startsWith("//")) {
    return true;
  }
  try {
    const url = new URL(decoded, "http://n");
    if (url.username || url.password) {
      return true;
    }
    if (decoded.includes("@") && !url.pathname.includes("@") && !url.search.includes("@")) {
      return true;
    }
    if (url.origin !== "http://n") {
      const protocol = url.protocol.toLowerCase();
      if (protocol === "file:") {
        return false;
      }
      return true;
    }
    if (URL.canParse(decoded)) {
      return true;
    }
    return false;
  } catch {
    return true;
  }
}
function removeBase(path, base) {
  if (path.startsWith(base)) {
    return path.slice(removeTrailingForwardSlash(base).length);
  }
  return path;
}

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position"
];

export { DEFAULT_OUTPUT_FORMAT as D, ICON_MAP as I, NAV_LINKS as N, SITE as S, VALID_INPUT_FORMATS as V, SOCIAL_LINKS as a, calculateWordCountFromHtml as b, cn as c, removeBase as d, VALID_SUPPORTED_FORMATS as e, formatDate as f, getHeadingMargin as g, DEFAULT_HASH_PROPS as h, isRemotePath as i, joinPaths as j, prependForwardSlash as p, readingTime as r };
