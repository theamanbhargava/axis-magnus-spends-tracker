import './App.css'
import ChakraWrapper from "./ChakraProvider.jsx";
import MainComponent from "./components/MainComponent.jsx";

function App() {
    return (
    <ChakraWrapper>
        <MainComponent />
    </ChakraWrapper>
    )
}

export default App
