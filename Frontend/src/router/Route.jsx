import Root from "../pages/Root"
import Features from "../pages/Features"
import Gallery from "../pages/Gallery"
import Home from "../pages/Home"
import Reviews from "../pages/Reviews"
import Shop from "../pages/Shop"
import Wishlist from "../pages/Wishlist"
import Add from "../pages/Add"
import Detail from "../pages/Detail"
import Basket from "../pages/Basket"
const routes = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/features",
                element: <Features />,
            },
            {
                path: "/gallery",
                element: <Gallery />,
            },
            {
                path: "/reviews",
                element: <Reviews />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/wishlist",
                element: <Wishlist />,
            },
            {
                path: "/basket",
                element: <Basket />,
            },
            {
                path: "/add",
                element: <Add />,
            },
            {
                path: "/:id",
                element: <Detail />,
            },
        ],
    },
]
export default routes