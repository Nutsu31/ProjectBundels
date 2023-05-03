import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Todo from "./pages/Todo";
import Root from "./pages/Root";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import PigDice from "./pages/PigDice";
import Blog from "./pages/Blog";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/todo-app" element={<Todo />} />
      <Route path="/pig-dice" element={<PigDice />} />
      <Route path="/blog" element={<Blog />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
