import { lexer } from "./lexer.js";

const buduCode = document.getElementById("buduCode") as HTMLTextAreaElement;
const output = document.getElementById("output") as HTMLElement;
const runBtn = document.getElementById("runBtn") as HTMLButtonElement;

buduCode.focus();

runBtn.addEventListener("click", () => {
  const code = buduCode.value;
  const values = lexer(code);
  output.textContent = values
    .map(
      (v) => `{
            ${v.type} ${v.value}
      }`,
    )
    .join("");
});
