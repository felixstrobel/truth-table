import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
    colors: {
        brand: "#f5f5f5", // Tailwind: neutral.100
        accent: "#56a15d",
        neutral: {
            900: "#171717", // Tailwind: neutral.900
        },
    },
});
