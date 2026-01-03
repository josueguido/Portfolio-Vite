import About from "../sections/AboutMe";
import Footer from "./Footer";
import Header from "./Header";
import { IconCloudDemo } from "../common/IconCloud";
import Principal from "../sections/Principal";
import Proyectos from "../sections/Projects"
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Slider from "../common/Slider";
function Layout() {
    return (
        <main className="pt-16">
                <Header />
                <Principal />
                <About />
                <Proyectos />
                <Experience />
                <Skills />
                <Slider />
                <IconCloudDemo/>
            <Footer />
        </main>
    );
}

export default Layout;