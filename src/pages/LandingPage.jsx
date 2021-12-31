import Coursel from './../components/Coursel';
import Products from '../components/Products';
import About from '../components/About';
import ContactUs from '../components/ContactUs';
import Advantage from '../components/Advantage';
export default function LandingPage() {

    return (
        <div>
            <Coursel/>
            <Advantage/>
            <Products latest={true} apiProducts ='http://fakestoreapi.com/products'/>
            <About/>
            <ContactUs/>
        </div>
    )
}
