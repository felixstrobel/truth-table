import { EvalFunction } from '../../types';

export default class Connective {
	private readonly officialSymbol: string;
	private readonly otherSymbols: string[];
	private readonly evalFunction: EvalFunction;

	constructor(officialSymbol: string, evalFunction: EvalFunction, otherSymbols: string[] = []) {
		this.officialSymbol = officialSymbol;
		this.otherSymbols = otherSymbols;

		this.evalFunction = evalFunction;
	}

	public getOfficialSymbol(): string {
		return this.officialSymbol;
	}

	public getOtherSymbols(): string[] {
		return this.otherSymbols;
	}
}
