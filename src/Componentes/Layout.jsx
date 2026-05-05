import About from "./AboutMe";
import Footer from "./Footer";
import Header from "./Header";
import { IconCloudDemo } from "./IconCloud";
import Principal from "./Principal";
import Proyectos from "./Projects"
import Experience from "./Experience";
import Skills from "./Skills";
import Slider from "./Slider";
import Certifications from "./Certifications";
function Layout() {
    return (
        <main className="pt-0">
                <Header />
                <Principal />
                <About />
                <Proyectos />
                <Experience />
                <Skills />
                <Certifications />
                <Slider />
                <IconCloudDemo/>
            <Footer />
        </main>
    );
}

export default Layout;