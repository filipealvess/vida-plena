import { Route, Routes } from "react-router-dom";
import IndexPage from "@/core/pages/Index";
import AreaPage from "@/core/pages/Area";

function Router() {
    return (
        <Routes>
            <Route path="/" Component={IndexPage} />
            <Route path="/metas/:area" Component={AreaPage} />
        </Routes>
    );
}

export default Router;
