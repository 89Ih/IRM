import { createSlice } from "@reduxjs/toolkit";
import ArabicContent from "../translating/arabic.json";
import EnglishContent from "../translating/english.json";

export const globleSlice = createSlice({
  name: "globle",
  initialState: {
    language: "en",
    mode:'dark',
    content: { Arabic: ArabicContent, English: EnglishContent },
    stly: { arCss: "ar.module.css", enCss: "en.module.css" },
    bootstrapp: {
        rtlHREF:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css", 
        rtlIGT:"sha384-dpuaG1suU0eT09tx5plTaGMLBsfDLzUCCUXOY2j/LSvXYuG6Bqs43ALlhIqAJVRb",
        ltrHREF:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css", 
        ltrIGT:"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
    },
  },
 
  reducers: {
    changeContent: (state, action) => {
      state.content = action.payload;
    },
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
    changeStly: (state, action) => {
      state.stly = action.payload;
    },
    changeBootstrapp: (state, action) => {
      state.bootstrapp = action.payload;
    },
    changeMode:(state, action)=>{
      state.mode = action.payload;
    }
  },
});

export const { changeContent, changeLanguage,changeStly,changeBootstrapp, changeMode} = globleSlice.actions;
export default globleSlice.reducer;
