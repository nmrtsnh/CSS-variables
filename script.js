const input = document.querySelector("controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${suffix}`,
    this.value + suffix
  );
}

input.forEach((input) => input.addEventListener("change", handleUpdate));
input.forEach((input) => input.addEventListener("mousemove", handleUpdate));
