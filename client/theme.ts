import { extendTheme, StyleConfig } from "@chakra-ui/react";

export const theme: Record<string, StyleConfig> = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
    colors: {
        brand: "#4cb489",
        accent: "#2e274f",
    },
});
