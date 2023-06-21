import Bridge from "../src/Bridge";

describe("Testing basic functions & unary operator", () => {
	test("Single variable", () => {
		expect(Bridge.parse("A")).toEqual([
			{ A: false, "=": false },
			{ A: true, "=": true },
		]);
		expect(Bridge.parse("B")).toEqual([
			{ B: false, "=": false },
			{ B: true, "=": true },
		]);
	});

	test("Boolean Expression", () => {
		expect(Bridge.parse("1")).toEqual([{ "=": true }]);
		expect(Bridge.parse("0")).toEqual([{ "=": false }]);
		expect(Bridge.parse("1↔1")).toEqual([{ "=": true }]);
		expect(Bridge.parse("1↔0")).toEqual([{ "=": false }]);
	});
});

describe("Testing all basic operator with alternative symbols", () => {
	test("NOT", () => {
		const output = [
			{ A: false, "=": true },
			{ A: true, "=": false },
		];

		expect(Bridge.parse("!A")).toEqual(output);
		expect(Bridge.parse("~A")).toEqual(output);
	});

	test("AND", () => {
		const output = [
			{ A: false, B: false, "=": false },
			{ A: false, B: true, "=": false },
			{ A: true, B: false, "=": false },
			{ A: true, B: true, "=": true },
		];

		expect(Bridge.parse("A∧B")).toEqual(output);
		expect(Bridge.parse("A&B")).toEqual(output);
		expect(Bridge.parse("A&&B")).toEqual(output);
	});

	test("NAND", () => {
		const output = [
			{ A: false, B: false, "=": true },
			{ A: false, B: true, "=": true },
			{ A: true, B: false, "=": true },
			{ A: true, B: true, "=": false },
		];

		expect(Bridge.parse("A⊼B")).toEqual(output);
		expect(Bridge.parse("A¬∧B")).toEqual(output);
		expect(Bridge.parse("A¬&B")).toEqual(output);
		expect(Bridge.parse("A¬&&B")).toEqual(output);
		expect(Bridge.parse("A!∧B")).toEqual(output);
		expect(Bridge.parse("A!&B")).toEqual(output);
		expect(Bridge.parse("A!&&B")).toEqual(output);
		expect(Bridge.parse("A~∧B")).toEqual(output);
		expect(Bridge.parse("A~&B")).toEqual(output);
		expect(Bridge.parse("A~&&B")).toEqual(output);
	});

	test("OR", () => {
		const output = [
			{ A: false, B: false, "=": false },
			{ A: false, B: true, "=": true },
			{ A: true, B: false, "=": true },
			{ A: true, B: true, "=": true },
		];

		expect(Bridge.parse("A∨B")).toEqual(output);
		expect(Bridge.parse("A|B")).toEqual(output);
		expect(Bridge.parse("A||B")).toEqual(output);
	});

	test("NOR", () => {
		const output = [
			{ A: false, B: false, "=": true },
			{ A: false, B: true, "=": false },
			{ A: true, B: false, "=": false },
			{ A: true, B: true, "=": false },
		];

		expect(Bridge.parse("A⊽B")).toEqual(output);
		expect(Bridge.parse("A¬∨B")).toEqual(output);
		expect(Bridge.parse("A¬|B")).toEqual(output);
		expect(Bridge.parse("A¬||B")).toEqual(output);
		expect(Bridge.parse("A!∨B")).toEqual(output);
		expect(Bridge.parse("A!|B")).toEqual(output);
		expect(Bridge.parse("A!||B")).toEqual(output);
		expect(Bridge.parse("A~∨B")).toEqual(output);
		expect(Bridge.parse("A~|B")).toEqual(output);
		expect(Bridge.parse("A~||B")).toEqual(output);
	});

	test("IMP", () => {
		const output = [
			{ A: false, B: false, "=": true },
			{ A: false, B: true, "=": true },
			{ A: true, B: false, "=": false },
			{ A: true, B: true, "=": true },
		];

		expect(Bridge.parse("A→B")).toEqual(output);
		expect(Bridge.parse("A>B")).toEqual(output);
		expect(Bridge.parse("A->B")).toEqual(output);
		expect(Bridge.parse("A=>B")).toEqual(output);
	});

	test("EQU", () => {
		const output = [
			{ A: false, B: false, "=": true },
			{ A: false, B: true, "=": false },
			{ A: true, B: false, "=": false },
			{ A: true, B: true, "=": true },
		];

		expect(Bridge.parse("A↔B")).toEqual(output);
		expect(Bridge.parse("A=B")).toEqual(output);
		expect(Bridge.parse("A==B")).toEqual(output);
		expect(Bridge.parse("A<>B")).toEqual(output);
		expect(Bridge.parse("A<=>B")).toEqual(output);
		expect(Bridge.parse("A<->B")).toEqual(output);
	});

	test("NEQU", () => {
		const output = [
			{ A: false, B: false, "=": false },
			{ A: false, B: true, "=": true },
			{ A: true, B: false, "=": true },
			{ A: true, B: true, "=": false },
		];

		expect(Bridge.parse("A↮B")).toEqual(output);
		expect(Bridge.parse("A!=B")).toEqual(output);
		expect(Bridge.parse("A<!>B")).toEqual(output);
		expect(Bridge.parse("A<!=>B")).toEqual(output);
	});
});

describe("Testing parentheses", () => {
	test("Parentheses in a binary term", () => {
		const output = [
			{ A: false, B: false, "=": false },
			{ A: false, B: true, "=": false },
			{ A: true, B: false, "=": false },
			{ A: true, B: true, "=": true },
		];

		expect(Bridge.parse("(A&B)")).toEqual(output);
		expect(Bridge.parse("((A&B))")).toEqual(output);
		expect(Bridge.parse("(A)&B")).toEqual(output);
		expect(Bridge.parse("A&(B)")).toEqual(output);
		expect(Bridge.parse("(((A)))&B")).toEqual(output);
		expect(Bridge.parse("((A)&((B)))")).toEqual(output);
	});

	test("Wrong placed parentheses", () => {
		expect(() => Bridge.parse("(A&B")).toThrow(Error);
		expect(() => Bridge.parse("((A&B)")).toThrow(Error);
		expect(() => Bridge.parse("A&B)")).toThrow(Error);
		expect(() => Bridge.parse("A(&B)")).toThrow(Error);
		expect(() => Bridge.parse("A(&)B")).toThrow(Error);
		expect(() => Bridge.parse("A)(&B")).toThrow(Error);
	});
});

describe("Testing user shit", () => {
	test("Funny user entering weird shit", () => {
		expect(() => Bridge.parse("")).toThrow(Error);
		expect(() => Bridge.parse("    ")).toThrow(Error);
		expect(() => Bridge.parse("  ")).toThrow(Error);
		expect(() => Bridge.parse("\n")).toThrow(Error);
		expect(() => Bridge.parse("\t")).toThrow(Error);

		expect(() => Bridge.parse("☠")).toThrow(Error);
		expect(() => Bridge.parse("💀")).toThrow(Error);

		expect(() => Bridge.parse("Entering some bs")).toThrow(Error);
	});
});
