
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("headline-input");
  const button = document.getElementById("update-btn");
  const headline = document.getElementById("cta-headline");

  button.addEventListener("click", () => {
    const newText = input.value.trim();
    if (newText) {
      headline.textContent = newText;
    }
  });
});
