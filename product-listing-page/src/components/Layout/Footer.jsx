import { Link } from 'react-router-dom';

const Footer = () => {
    return <footer>
        <div className="footerContent">
            <div className="pages">
            <ul>
                <li><Link to="/">Man Trainers</Link></li>
                <li><Link to="/woman-trainers">Woman Trainers</Link></li>
                <li><Link to="/kids-trainers">Kids Trainers</Link></li>
                <li><Link to="/man-shoes">Man Shoes</Link></li>
                
            </ul>
            </div>
            <div className="pages">
            <ul>
                <li><Link to="/woman-shoes">Woman Shoes</Link></li>
                <li><Link to="/kids-shoes">Kids Shoes</Link></li>
                <li><Link to="/shopping-cart">Cart</Link></li>
            </ul>
            </div>
            <div className="termsAndConditions">
                <ul>
                    <li><Link to="/terms-and-conditions">Terms And Conditions</Link></li>
                    <li><Link to="/privasy-and-polisy">Privasy And Polisy</Link></li>
                </ul>
            </div>
            <div className="contacts">
                <ul>
                    <li>Phone: <a href="phone:+359888888888">088 8888 888</a></li>
                    <li>Email:<a href="mailto:shoestore@gmail.com">shoestore@gmail.com</a></li>
                    <li>Address: Varna, St. Andrei Saharov 2</li>
                </ul>
            </div>
        </div>
        <div className="bottomText">&#169;Products App {new Date().getFullYear()}</div>
        </footer>
}

export default Footer