import Lexer from "../src/model/token/Lexer";

test("pass empty string to lexer", () => {
	expect(() => new Lexer("")).toThrow(Error);
});

test("pass whitespace string to lexer", () => {
	expect(() => new Lexer(" 	     ")).toThrow(Error);
});
