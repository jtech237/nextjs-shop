import React from "react";
import ThemeProvider from "./ThemeProvider";

export const Providers = ({children}: {children: React.ReactNode})=>{
    return (<ThemeProvider enableSystem defaultTheme="system" attribute="class">
        {children}
    </ThemeProvider>)
}