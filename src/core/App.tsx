import { BrowserRouter } from "react-router-dom";
import Router from "@/core/Routes";
import { useEffect } from "react";
import { updateUI } from "@/utils/theme";

function App() {
    useEffect(() => {
        updateUI();
    }, []);

    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}

export default App;
