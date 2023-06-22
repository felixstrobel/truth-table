'use client'

import './favicon.ico';
import './globals.css';

import React from "react";
import {ChakraProvider, ColorModeScript, extendTheme} from "@chakra-ui/react";

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
};

export const theme = extendTheme({colors});

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        {/*TODO add SEO*/}
        <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider></body>
        </html>
    );
}