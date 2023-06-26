"use client";

import "./favicon.ico";
import "./globals.css";

import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "@/theme";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            {/*TODO add SEO*/}
            <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <ChakraProvider theme={theme}>{children}</ChakraProvider>
            </body>
        </html>
    );
}
