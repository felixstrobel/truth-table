import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Comfortaa } from "@next/font/google";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const colors = {
    neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
        950: "#0a0a0a",
    },
};

const comfortaa = Comfortaa({
    subsets: ["latin-ext"],
    display: "swap",
});

export default extendTheme({
    config,
    colors,
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                bg: mode(colors.neutral["200"], colors.neutral["900"])(props),
            },
        }),
    },
    fonts: {
        body: comfortaa.style.fontFamily,
        heading: comfortaa.style.fontFamily,
    },
});
