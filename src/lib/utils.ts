export const isMobile = () => {
  if (typeof window === "undefined") return false;
  const width = window.innerWidth;
  return width < 1024;
};

export const isTablet = () => {
  if (typeof window === "undefined") return false;
  const width = window.innerWidth;
  return width >= 768 && width < 1024;
};

export const isDesktop = () => {
  if (typeof window === "undefined") return false;
  const width = window.innerWidth;
  return width >= 1024;
};
