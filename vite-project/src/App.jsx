
import './App.css'
import Sav from "./Pages/sav.jsx";
import { createBrowserRouter, parsePath, RouterProvider } from "react-router";
import Root from "./Pages/Root.jsx";
import Error from "./Pages/Error.jsx";
import Avis from "./Pages/Avis.jsx";
import News  from "./Pages/News.jsx";

function App() {
    const router = createBrowserRouter(
        [{
            path: '/',
            element: <Root />,
            errorElement: <Error />,
            children: [
                {
                    index: true,
                    element: <Sav />,
                },
                {
                    path: 'avis',
                    element: <Avis />,
                },
                {
                    path: 'news',
                    element: <News />
                },

            ]
        }]
    )
  return <RouterProvider router={router} />;
}

export default App
