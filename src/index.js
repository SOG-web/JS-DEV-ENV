import _ from "lodash";
import "./index.css";
import logo from "./logo.large.png";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  console.log("ghcgx");
  debugger;
  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = logo;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
