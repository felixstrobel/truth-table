import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { styles } from "./styles";
import { Button } from "@/theme/components/button";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

// export const theme = extendTheme({
//     config,
//     styles: {
//         global: (props: StyleFunctionProps) => ({
//             body: {
//                 bg: mode("#f5f5f5", "#171717")(props),
//                 color: mode("#f5f5f5", "#50ff4b")(props),
//             },
//         }),
//     },
//
//     // components: (props: StyleFunctionProps) => ({}),
// });

export default extendTheme({
    config,
    styles,
    components: {
        Button,
    },
});
