import Operator from "../model/operator/Operator";
import BinaryOperator from "../model/operator/BinaryOperator";
import UnaryOperator from "../model/operator/UnaryOperator";

/**
 * The OperatorFactory creates the operators, supported by default.
 * Those default operators are: Negation, Conjunction, NAND, Disjunction, NOR, Conditional, Biconditional, Exclusive
 * Disjunction.
 *
 * @author Felix Strobel <https://github.com/felixstrobel>
 * @author Max Lohrmann <https://github.com/Max0440>
 */
class OperatorFactory {
    public static getAllOperators(): Operator[] {
        // Order is important and should not be changed without thinking ;)
        return [
            this.createNegation(),
            this.createNAND(),
            this.createNOR(),
            this.createConjunction(),
            this.createDisjunction(),
            this.createConditional(),
            this.createBiconditional(),
            this.createExclusiveDisjunction(),
        ];
    }

    public static createNegation(): Operator {
        return new UnaryOperator((x: boolean) => !x, "¬", ["!", "~"]);
    }

    public static createConjunction(): Operator {
        return new BinaryOperator((x: boolean, y: boolean) => x && y, "∧", ["&&", "&"]);
    }

    public static createNAND(): Operator {
        return new BinaryOperator((x: boolean, y: boolean) => !(x && y), "⊼", [
            "¬∧",
            "¬&&",
            "¬&",
            "!∧",
            "!&&",
            "!&",
            "~∧",
            "~&&",
            "~&",
        ]);
    }

    public static createDisjunction(): Operator {
        return new BinaryOperator((x: boolean, y: boolean) => x || y, "∨", ["||", "|"]);
    }

    public static createNOR(): Operator {
        return new BinaryOperator((x: boolean, y: boolean) => !(x || y), "⊽", [
            "¬∨",
            "¬||",
            "¬|",
            "!∨",
            "!||",
            "!|",
            "~∨",
            "~||",
            "~|",
        ]);
    }

    public static createConditional(): Operator {
        return new BinaryOperator((x: boolean, y: boolean) => !x || y, "→", [">", "->", "=>"]);
    }

    public static createBiconditional(): Operator {
        return new BinaryOperator((x: boolean, y: boolean) => (x && y) || (!x && !y), "↔", [
            "==",
            "=",
            "<>",
            "<->",
            "<=>",
        ]);
    }

    public static createExclusiveDisjunction(): Operator {
        return new BinaryOperator((x: boolean, y: boolean) => (!x && y) || (x && !y), "⇹", [
            "!=",
            "<!>",
            "<!=>",
        ]);
    }
}

export default OperatorFactory;
