const keys = [
    "set",
    "is",
    "voice",
    "if",
    "equals",
    "plus",
    "minus",
    "times",
    "add",
    "to",
    "divided",
];
export function lexer(text) {
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
//# sourceMappingURL=lexer.js.map