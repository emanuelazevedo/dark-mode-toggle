
import { useEffect } from "react";
import "../styles/index.css"
import { keepTheme } from '../utils/themes'
import {Toggle} from './Toggle'

function App() {

    useEffect(() => {
        keepTheme();
    })

    return (
    <div className="main-container">
        <Toggle />
        Hello there
    </div>
  );
}

export default App;
