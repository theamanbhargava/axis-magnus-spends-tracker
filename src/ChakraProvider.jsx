import { ChakraProvider, CSSReset, Box, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    config: {
        useSystemColorMode: false,
    },
    styles: {
        global: {
            body: {
                textAlign: 'left',
            },
        },
    },
})

function ChakraWrapper({ children }) {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <Box p={5}>{children}</Box>
        </ChakraProvider>
    )
}

export default ChakraWrapper
