import { useEffect } from "react";
import "./Projects.css"

let slideIndex = 1;

function showSteps(n) {
  let slides = document.getElementsByClassName("_steps");
  for (let i = 0; i < slides.length; i++){ 
    slides[i].style.display = i === slideIndex - 1 ? "flex" : "none" 
  }
}
function Steps(props) {
  const { children, title,actuell} = props;

  function handleMove() {
    currentStep(actuell)
  }
  useEffect(() =>{
     showSteps(slideIndex)
    }, [])
  return (
    <section className="_steps">
      <h2>{title}</h2>
      <div>{children}</div>
      <button  onClick={handleMove}>Next</button>
    </section>
  );
}
export function nextStep(n) { showSteps((slideIndex += n))}

export function currentStep(n) {showSteps((slideIndex = n))}

export default Steps;