import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { Avatar as Avatar$1 } from 'radix-ui';
import { c as cn } from './consts_CDRqZ4y9.mjs';

function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Avatar$1.Root,
    {
      "data-slot": "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Avatar$1.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Avatar$1.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      ),
      ...props
    }
  );
}
const AvatarComponent = ({
  src,
  alt,
  fallback,
  className
}) => {
  return /* @__PURE__ */ jsxs(Avatar, { className, children: [
    /* @__PURE__ */ jsx(AvatarImage, { src, alt }),
    /* @__PURE__ */ jsx(AvatarFallback, { children: fallback })
  ] });
};

export { AvatarComponent as A };
