import { Route, Routes } from "react-router-dom";
import IndexPage from "@/core/pages/Index";
import AreaPage from "@/core/pages/Area";
import NewGoalPage from "@/core/pages/NewGoal";
import GoalPage from "@/core/pages/Goal";

function Router() {
    return (
        <Routes>
            <Route path="/" Component={IndexPage} />
            <Route path="/metas/:area" Component={AreaPage} />
            <Route path="/metas/:area/cadastro" Component={NewGoalPage} />
            <Route path="/metas/:area/:goal" Component={GoalPage} />
        </Routes>
    );
}

export default Router;
