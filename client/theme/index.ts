import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { colors } from "@/theme/colors";
import { styles } from "@/theme/styles";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

export default extendTheme({
    config,
    colors,
    styles,
});
