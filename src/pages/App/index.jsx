import { useRoutes } from "react-router-dom";

import Game from "../Game";
import Start from "../Start";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", Component: Game },
    { path: "/start", Component: Start },
  ]);
  return routes;
}

function App() {
  return <AppRoutes />;
}

export default App;
