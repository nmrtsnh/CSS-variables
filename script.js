const controlInput = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

controlInput.forEach((input) => input.addEventListener("change", handleUpdate));
controlInput.forEach((input) =>
  input.addEventListener("mousemove", handleUpdate)
);
