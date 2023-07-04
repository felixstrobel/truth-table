import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Comfortaa } from "next/font/google";

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
    fallback: [
        "Arial",
        "Helvetica Neue",
        "Roboto",
        "sans-serif",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
    ],
});

export default extendTheme({
    config,
    colors,
    styles: {
        global: (props: StyleFunctionProps) => ({
            "body": {
                bg: mode("neutral.100", "neutral.900")(props),
            },
            "*": {
                "&::-webkit-scrollbar": {
                    width: 2,
                },
                "&::-webkit-scrollbar-track": {
                    width: 2,
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: mode("neutral.500", "neutral.700")(props),
                    borderRadius: "md",
                },
            },
            "*::selection": { backgroundColor: "purple.400" },
        }),
    },
    fonts: {
        body: comfortaa.style.fontFamily,
        heading: comfortaa.style.fontFamily,
    },
    shadows: {
        outline: "0 0 0 2px #9F7AEA",
    },
});
