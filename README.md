# TODOs

# Funktionale Anforderungen

-   [ ] Folgende Oparatoren sollen akzeptiert werden: NOT, AND, NAND, OR, NOR, XOR, XNOR, IMP
-   [ ] Folgende Variablen sollen akzeptiert werden: A-Z
-   [ ] Es sollen Terme durch Kommas gertrennt parallel ausgeführt werden können
-   [ ] Die Tabelle soll über einen Link geteilt werden können
-   [ ] Die Tabelle soll im local storage des Browsers gespeichert werden
-   [ ] Fehlerhafte Eingaben sollten dem Benutzer mit hilfreichen Hinweisen angezeigt werden, um eine Korrektur zu ermöglichen

# Supported Input Formats

| Operator              | Unicode | Alternatives                                   |
| --------------------- | ------- | ---------------------------------------------- |
| Negation              | ¬       | !, ~                                           |
| Conjunction           | ∧       | &, &&                                          |
| NAND                  | ⊼       | ¬∧, ¬&, ¬&&, !∧, !&, !&&, ~∧, ~&, ~&&          |
| Disjunction           | ∨       | \|, \|\|                                       |
| NOR                   | ⊽       | ¬∨, ¬\|, ¬\|\|, !∨, !\|, !\|\|, ~∨, ~\|, ~\|\| |
| Conditional           | →       | >, ->, =>                                      |
| Biconditional         | ↔       | =, ==, <>, <=>, <->                            |
| Exclusive Disjunction | ⇹       | !=, <!>, <!=>                                  |
