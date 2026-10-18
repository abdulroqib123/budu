"use strict";
const buduCode = document.getElementById("buduCode");
const output = document.getElementById("output");
buduCode.focus();
buduCode.addEventListener("input", () => {
    const code = buduCode.value;
    const values = lexer(code);
    output.textContent = values
        .map((v) => `{
            ${v.type} ${v.value}
      }`)
        .join("");
});
const keys = ["set", "is", "voice", "if", "equals", "plus", "minus", "times", "add", "to", "divided"];
function lexer(text) {
    const lines = text
        .trim()
        .split(/\r\n|\r|\n/g)
        .filter((w) => w !== "");
    const ids = [];
    lines.forEach((line) => {
        const words = line.split(/\s+/);
        words.forEach((word) => {
            if (keys.includes(word)) {
                ids.push({ type: "keyword", value: word });
            }
            else if (/^-?\d+(\.\d+)?$/.test(word)) {
                ids.push({ type: "number", value: word });
            }
            else {
                ids.push({ type: "identifier", value: word });
            }
        });
        ids.push({
            type: "newline",
            value: "",
        });
    });
    return ids;
}
//# sourceMappingURL=index.js.map