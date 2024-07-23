const mouseXEl = document.getElementById("mouseX");
const mouseYEl = document.getElementById("mouseY");

window.addEventListener("mousemove", (event) => {
  mouseXEl.innerHTML = `
    ${event.clientX}
    <h4>Mouse X Position (px)</h4>
  `;
  mouseYEl.innerHTML = `
    ${event.clientY}
    <h4>Mouse Y Position (px)</h4>
  `;
});
