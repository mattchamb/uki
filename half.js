function applyHalfD(container) {
  const range = 40;
  let element = container.querySelector(".half-d");
  container.addEventListener("mousemove", function (e) {
    let xFraction = Math.max(0, e.offsetX / e.target.offsetWidth);
    let yFraction = Math.max(0, e.offsetY / e.target.offsetHeight);
    element.style.setProperty(
      "--rotation-y",
      `${(xFraction * range - range / 2).toFixed(2)}deg`
    );
    element.style.setProperty(
      "--rotation-x",
      `${-(yFraction * range - range / 2).toFixed(2)}deg`
    );
  });

  // let sss = element.querySelector("#asd");
  // sss.addEventListener("input", (ev) => {
  //   d.style.setProperty("--perspective", `${ev.target.value}px`);
  // });
}
