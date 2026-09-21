const btn = document.getElementByID("btn");
const text = document.getElementByID("text");

btn.addEventListener("click", () => {
  setTimeout(() => {
    text.textContent("ボタンをクリックしました");
  }, 2000);
});
