import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Projects from './components/Projects'
import './fonts.css'

import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navbar />}>
            <Route index element={
                <>
                    <Home />
                </>
            } />
            <Route
                path="projects"
                element={
                    <>
                        <Projects />
                    </>
                } />
        </Route>
    )
);

export default function App() {
    return (
      <RouterProvider router={router} />
    );
}