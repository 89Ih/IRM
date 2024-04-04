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
    theme.style.backgroundColor='white'
    dispatch(changeMode("light"));
    return theme.setAttribute("data-bs-theme", "light");
  }
  if (mode === "light") {
    theme.style.backgroundColor='#212529'
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
    theme.style.backgroundColor='#212529'
    return theme.setAttribute("data-bs-theme", "dark");
  } else {
    theme.style.backgroundColor='white'
    return theme.setAttribute("data-bs-theme", "light");
  }
}
