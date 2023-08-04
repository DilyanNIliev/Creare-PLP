import ManTrainers from '../components/Pages/ManTrainers';
import WomanTrainers from '../components/Pages/WomanTrainers';
import KidsTrainers from '../components/Pages/KidsTrainers.jsx';
import ManShoes from '../components/Pages/ManShoes.jsx';
import WomanShoes from '../components/Pages/WomanShoes.jsx';
import KidsShoes from '../components/Pages/KidsShoes.jsx';
import ShoppingCart from '../components/Pages/ShoppingCart.jsx';
import TermsAndConditions from '../components/Pages/TermsAndConditions.jsx';
import PrivasyAndPolisy from '../components/Pages/PrivasyAndPolisy.jsx';

const routes = {
    manTrainers: { path: '/', name: 'Man Trainers', includeInNavigation: true, element: <ManTrainers /> },
    womanTrainers: { path: '/woman-trainers', name: 'Woman Trainers', includeInNavigation: true, element: <WomanTrainers /> },
    kidsTrainers: { path: '/kids-trainers', name: 'Kids Trainers', includeInNavigation: true, element: <KidsTrainers /> },
    manShoes: { path: '/man-shoes', name: 'Man Shoes', includeInNavigation: true, element: <ManShoes /> },
    womanShoes: { path: '/woman-shoes', name: 'Woman Shoes', includeInNavigation: true, element: <WomanShoes /> },
    kidsShoes: { path: '/kids-shoes', name: 'Kids Shoes', includeInNavigation: true, element: <KidsShoes /> },
    shoppingCart: { path: '/shopping-cart', name: 'Shopping Cart', includeInNavigation: true, element: <ShoppingCart /> },
    termsAndConditions: { path: '/terms-and-conditions', name: 'Terms And Conditions', includeInNavigation: false, element: <TermsAndConditions /> },
    privasyAndPolisy: { path: '/privasy-and-polisy', name: 'Privasy And Polisy', includeInNavigation: false, element: <PrivasyAndPolisy /> },
}

export {
    routes,
}