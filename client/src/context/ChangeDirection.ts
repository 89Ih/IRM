export function changeDirection(
  mode:string,
  language: string,
  arCss: string,
  rtlHREF: string,
  rtlIGT: string,
  enCss: string,
  ltrHREF: string,
  ltrIGT: string,
  dispatch: (action: any) => void, // Update the type of dispatch if possible
  changeLanguage: (lang: string) => void, // Update the type of changeLanguage if possible
  changeMode: (mode: string) => void
) {
  // Find HTML element
  const HTML = document.querySelector("html");
  if (!HTML) {
    console.error("HTML element not found.");
    return;
  }

  // Find CSS link and Bootstrap link elements
  const CSSLink = document.querySelector("#dir_css");
  const Bootstrap = document.querySelector("#lk_dir");
  if (!CSSLink || !Bootstrap) {
    console.error("CSS link or Bootstrap link element not found.");
    return;
  }
   HTML.style.backgroundColor=`${mode === 'dark' ? '#212529':'white'}` 
  // Remove href and integrity attributes from Bootstrap link
  Bootstrap.removeAttribute("href");
  Bootstrap.removeAttribute("integrity");

  // Set direction and language attributes based on the selected language
  if (language === "en") {

    HTML.setAttribute("dir", "rtl");
    HTML.setAttribute("lang", "ar");
    CSSLink.setAttribute("href", arCss);
    Bootstrap.setAttribute("href", rtlHREF);
    Bootstrap.setAttribute("integrity", rtlIGT);
    dispatch(changeLanguage("ar"));
  } else {
    
    HTML.setAttribute("dir", "ltr");
    HTML.setAttribute("lang", "en");
    CSSLink.setAttribute("href", enCss);
    Bootstrap.setAttribute("href", ltrHREF);
    Bootstrap.setAttribute("integrity", ltrIGT);
    dispatch(changeLanguage("en"));
  }
}


export function festDirection(
  mode:string,
  language: string,
  arCss: string,
  rtlHREF: string,
  rtlIGT: string,
  enCss: string,
  ltrHREF: string,
  ltrIGT: string,
  dispatch: (action: any) => void, // Update the type of dispatch if possible
  changeLanguage: (lang: string) => void, // Update the type of changeLanguage if possible) 

) {
  // Find HTML element
  const HTML = document.querySelector("html");
  if (!HTML) {
    console.error("HTML element not found.");
    return;
  }
  HTML.style.backgroundColor=`${mode === 'dark' ? '#212529':'white'}` 
  // Find CSS link and Bootstrap link elements
  const CSSLink = document.querySelector("#dir_css");
  const Bootstrap = document.querySelector("#lk_dir");
  if (!CSSLink || !Bootstrap) {
    console.error("CSS link or Bootstrap link element not found.");
    return;
  }

  Bootstrap.removeAttribute("href");
  Bootstrap.removeAttribute("integrity");

  if (language === "en") {

    HTML.setAttribute("dir", "ltr");
    HTML.setAttribute("lang", "en");
    CSSLink.setAttribute("href", enCss);
    Bootstrap.setAttribute("href", ltrHREF);
    Bootstrap.setAttribute("integrity", ltrIGT);
    dispatch(changeLanguage("en"));
  } else {
    HTML.setAttribute("dir", "rtl");
    HTML.setAttribute("lang", "ar");
    CSSLink.setAttribute("href", arCss);
    Bootstrap.setAttribute("href", rtlHREF);
    Bootstrap.setAttribute("integrity", rtlIGT);
    dispatch(changeLanguage("ar"));
  }
}