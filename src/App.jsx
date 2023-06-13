import './App.css'
import ChakraWrapper from "./ChakraProvider.jsx";
import MainComponent from "./MainComponent.jsx";

function App() {
    return (
    <ChakraWrapper>
        <MainComponent />
    </ChakraWrapper>
    )
}

export default App
