import About from "./AboutMe";
import Footer from "./Footer";
import Header from "./Header";
import { IconCloudDemo } from "./IconCloud";
import Principal from "./Principal";
import Proyectos from "./Proyectos"
import Slider from "./Slider";
function Layout() {
    return (
        <main>
                <Header />
                <Principal />
                <About />
                <Proyectos />
                <Slider />
                <IconCloudDemo/>
            <Footer />
        </main>
    );
}

export default Layout;