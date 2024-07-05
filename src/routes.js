import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PaginaBase from "pages/PaginaBase";
import NovoVideo from "pages/NovoVideo";
import { VideosProvider } from "components/contextos/Videos";


export default function RoutesApp() {

    return (
        <BrowserRouter>
            <VideosProvider>
                <Routes>
                    <Route path="/" element={<PaginaBase />}>
                        <Route index element={<Home />}></Route>
                        <Route path="NovoVideo" element={<NovoVideo />}></Route>
                    </Route>
                </Routes>
            </VideosProvider>

        </BrowserRouter>

    )
}