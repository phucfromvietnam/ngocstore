export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const externalLinkProps = {
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
};
