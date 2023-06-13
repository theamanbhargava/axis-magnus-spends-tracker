import './App.css'
import ChakraWrapper from "./ChakraProvider.jsx";
import MainComponent from "./components/MainComponent.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

function App() {
    return (
        <ChakraWrapper>
            <ErrorBoundary errorMessage="The entire app has crashed. Please refresh the page.">
                <MainComponent />
            </ErrorBoundary>
        </ChakraWrapper>
    )
}

export default App
