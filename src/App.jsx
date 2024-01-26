import cl from './App.module.sass'
import {Main} from "./components/Main";
import {About} from "./components/About";
import {Mission} from "./components/Mission";
import {Roadmap} from "./components/Roadmap";
import {CrossChainBridge} from "./components/CrossChainBridge";
import {Footer} from "./components/Footer";

function App() {
    return (
        <div className={cl.App}>
            <Main/>
            <About/>
            <Mission/>
            <Roadmap/>
            <CrossChainBridge/>
            <Footer/>
        </div>
    );
}

export default App;
