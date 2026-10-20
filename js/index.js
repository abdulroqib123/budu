import { lexer } from "./lexer.js";
const buduCode = document.getElementById("buduCode");
const output = document.getElementById("output");
const runBtn = document.getElementById("runBtn");
buduCode.focus();
runBtn.addEventListener("click", () => {
    const code = buduCode.value;
    const values = lexer(code);
    output.textContent = values
        .map((v) => `{
            ${v.type} ${v.value}
      }`)
        .join("");
});
//# sourceMappingURL=index.js.map