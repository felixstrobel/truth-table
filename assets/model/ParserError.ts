export default class ParserError extends Error {
    private _position?: number;
    private _input: string;

    constructor(message: string, input: string, position?: number) {
        super(message);

        this._input = input;
        this._position = position;
    }

    public get position(): number | undefined {
        return this._position;
    }

    public get input(): string {
        return this._input;
    }
}
