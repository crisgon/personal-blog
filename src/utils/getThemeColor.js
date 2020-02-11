const getThemeColor = () => {
  const theme = typeof window !== "undefined" && window.__theme;

  if (theme === "dark") return "#404040";
  if (theme === "light") return "#f2f2f2";
};

export default getThemeColor;
