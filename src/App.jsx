import cl from './App.module.sass'
import {Main} from "./components/Main";
import {About} from "./components/About";

function App() {
    return (
        <div className={cl.App}>
            <Main/>
            <About/>
        </div>
    );
}

export default App;
