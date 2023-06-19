import { EvalFunction } from '../../types';
import ConnectiveType from './ConnectiveType';

export default class Connective {
	private readonly officialSymbol: string;
	private readonly otherSymbols: string[];
	private readonly evalFunction: EvalFunction;
	private readonly connectiveType: ConnectiveType;

	constructor(
		officialSymbol: string,
		connectiveType: ConnectiveType,
		evalFunction: EvalFunction,
		otherSymbols: string[] = []
	) {
		this.officialSymbol = officialSymbol;
		this.otherSymbols = otherSymbols;
		this.connectiveType = connectiveType;

		this.evalFunction = evalFunction;
	}

	public getOfficialSymbol(): string {
		return this.officialSymbol;
	}

	public getOtherSymbols(): string[] {
		return this.otherSymbols;
	}

	public getConnectiveType(): ConnectiveType {
		return this.connectiveType;
	}
}
