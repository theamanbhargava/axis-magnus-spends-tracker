import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state to display fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI when an error occurs
            const { errorMessage } = this.props;
            return (
                <Box p={8}>
                    <Heading size="lg" mb={4}>Something went wrong.</Heading>
                    {errorMessage && <Text>{errorMessage}</Text>}
                    {!errorMessage && <Text>Please try again later.</Text>}
                </Box>
            );
        }

        // Render the wrapped components if no error occurred
        return this.props.children;
    }
}

export default ErrorBoundary;
