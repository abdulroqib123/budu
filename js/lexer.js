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
/**
 * @param words - An array of strings
 */
function printValue(words) {
    let valueToPrint = "";
    if (words[0] === "voice" && words.length === 2) {
        valueToPrint = words[1];
    }
    else {
        throw new Error("Value to be printed must be one");
    }
    return valueToPrint;
}
//# sourceMappingURL=lexer.js.map