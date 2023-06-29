import { mode } from "@chakra-ui/theme-tools";
import { StyleFunctionProps } from "@chakra-ui/react";
import { colors } from "@/theme/colors";

export const styles = {
    global: (props: StyleFunctionProps) => ({
        body: {
            bg: mode(colors.neutral["200"], colors.neutral["900"])(props),
        },
    }),
};
