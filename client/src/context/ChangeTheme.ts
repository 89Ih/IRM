export function switchTheme(
  mode: string,
  dispatch: (action: any) => void,
  changeMode: (mode: string) => void
) {
  const theme = document.querySelector("html");
  if (!theme) {
    console.error("HTML element not found.");
    return;
  }
  theme.removeAttribute("data-bs-theme");
  if (mode === "dark") {
    dispatch(changeMode("light"));
    return theme.setAttribute("data-bs-theme", "light");
  }
  if (mode === "light") {
    dispatch(changeMode("dark"));
    return theme.setAttribute("data-bs-theme", "dark");
  }
}

export function festTheme(
  mode: string,
) {
  const theme = document.querySelector("html");
  if (!theme) {
    console.error("HTML element not found.");
    return;
  }
  if (mode === "dark") {

    return theme.setAttribute("data-bs-theme", "dark");
  } else {

    return theme.setAttribute("data-bs-theme", "light");
  }
}
