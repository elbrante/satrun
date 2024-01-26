import cl from './App.module.sass'
import {Main} from "./components/Main";
import {About} from "./components/About";
import {Mission} from "./components/Mission";

function App() {
    return (
        <div className={cl.App}>
            <Main/>
            <About/>
            <Mission/>
        </div>
    );
}

export default App;
