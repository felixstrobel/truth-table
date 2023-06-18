// @ts-nocheck

import Token from '../model/tokens/Token';

export default class Lexer {
	private input: string;
	private currentIndex: number;
	private currentToken: string;

	constructor(input: string) {
		this.input = input.trim();

		this.currentIndex = 0;
		this.currentToken = this.input.charAt(0);
	}

	private updateToken() {
		this.currentIndex++;
		this.currentToken = this.input.charAt(this.currentIndex);
	}

	public nextToken(): { token: Token; symbol?: string } {
		if (this.currentToken === '') return { token: Token.EOF };

		if (this.currentToken.match(/[a-zA-Z]/)) {
			let symbol = this.currentToken;
			this.updateToken();
			return { token: Token.VARIABLE, symbol: symbol };
		}

		//#region unicode
		if (this.currentToken === '⊼') {
			this.updateToken();
			return { token: Token.NAND_OPERATOR };
		}
		if (this.currentToken === '∧') {
			this.updateToken();
			return { token: Token.AND_OPERATOR };
		}
		if (this.currentToken === '⊽') {
			this.updateToken();
			return { token: Token.NOR_OPERATOR };
		}
		if (this.currentToken === '∨') {
			this.updateToken();
			return { token: Token.OR_OPERATOR };
		}
		if (this.currentToken === '→') {
			this.updateToken();
			return { token: Token.IMP_OPERATOR };
		}
		if (this.currentToken === '↔') {
			this.updateToken();
			return { token: Token.XNOR_OPERATOR };
		}
		if (this.currentToken === '↮') {
			this.updateToken();
			return { token: Token.XOR_OPERATOR };
		}
		//#endregion

		// &, &&
		if (this.currentToken === '&') {
			this.updateToken();
			if (this.currentToken === '&') {
				this.updateToken();
			}
			return { token: Token.AND_OPERATOR };
		}

		// |, ||
		if (this.currentToken === '|') {
			this.updateToken();
			if (this.currentToken === '|') {
				this.updateToken();
			}
			return { token: Token.OR_OPERATOR };
		}

		if (this.currentToken === '¬' || this.currentToken === '!' || this.currentToken === '~') {
			this.updateToken();

			if (this.currentToken === '∧') {
				this.updateToken();
				return { token: Token.NAND_OPERATOR };
			}
			if (this.currentToken === '&') {
				this.updateToken();
				if (this.currentToken === '&') {
					this.updateToken();
				}
				return { token: Token.NAND_OPERATOR };
			}

			if (this.currentToken === '∨') {
				this.updateToken();
				return { token: Token.NOR_OPERATOR };
			}
			if (this.currentToken === '|') {
				this.updateToken();
				if (this.currentToken === '|') {
					this.updateToken();
				}
				return { token: Token.NOR_OPERATOR };
			}

			if (this.currentToken === '=') {
				this.updateToken();
				return { token: Token.XOR_OPERATOR };
			}

			return { token: Token.NOT_OPERATOR };
		}

		// ->
		if (this.currentToken === '-') {
			this.updateToken();
			if (this.currentToken === '>') {
				this.updateToken();
				return { token: Token.IMP_OPERATOR };
			}
			throw new Error();
			// TODO Error
		}

		// = == =>
		if (this.currentToken === '=') {
			this.updateToken();

			if (this.currentToken === '>') {
				this.updateToken();
				return { token: Token.IMP_OPERATOR };
			}

			if (this.currentToken === '=') {
				this.updateToken();
			}
			return { token: Token.XNOR_OPERATOR };
		}

		// <> <=> <-> <!> <!=>
		if (this.currentToken === '<') {
			this.updateToken();

			if (this.currentToken === '>') {
				this.updateToken();
				return { token: Token.XNOR_OPERATOR };
			}

			if (this.currentToken === '=') {
				this.updateToken();
				if (this.currentToken === '>') {
					this.updateToken();
					return { token: Token.XNOR_OPERATOR };
				}
				throw new Error();
				// TODO Error
			}

			if (this.currentToken === '-') {
				this.updateToken();
				if (this.currentToken === '>') {
					this.updateToken();
					return { token: Token.XNOR_OPERATOR };
				}
				throw new Error();
				// TODO Error
			}

			if (this.currentToken === '!') {
				this.updateToken();

				if (this.currentToken === '=') {
					this.updateToken();
				}

				if (this.currentToken === '>') {
					this.updateToken();
					return { token: Token.XOR_OPERATOR };
				}
				throw new Error();
				// TODO Error
			}
		}

		throw new Error();
		// TODO Error
	}
}
