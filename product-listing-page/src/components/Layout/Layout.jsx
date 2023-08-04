import { Route, Routes } from "react-router";
import { routes } from "../../utils/constants";
import ManTrainers from '../Pages/ManTrainers';
import ProductDetail from '../Pages/ProductDetail';

const Layout = () => {

    return <Routes>
        {
            Object
                .values(routes)
                .map((route) =>
                    <Route element={route.element} path={route.path} key={route.path} />
                )
        }
        <Route path="/" element={<ManTrainers />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
    </Routes>
}

export default Layout;