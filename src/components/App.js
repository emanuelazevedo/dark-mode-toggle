
import { useEffect } from "react";
import "../styles/index.css"
import { keepTheme } from '../utils/themes'
import {Header} from './Header'

function App() {

    useEffect(() => {
        keepTheme();
    })

    return (
    <div className="">
        <Header />
        <div className="container-fluid main-container">
            hello
        </div>
    </div>
  );
}

export default App;
