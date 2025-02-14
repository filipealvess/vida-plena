import { Route, Routes } from "react-router-dom";
import IndexPage from "@/core/pages/Index";

function Router() {
    return (
        <Routes>
            <Route path="/" Component={IndexPage} />
        </Routes>
    );
}

export default Router;
