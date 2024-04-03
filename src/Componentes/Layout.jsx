import About from "./AboutMe";
import Footer from "./Footer";
import Header from "./Header";
import Principal from "./Principal";
import Proyectos from "./Proyectos"
import Slider from "./Slider";
import ThemeColor from "./ThemeColor";

function Layout() {
    return (
        <main>
            <ThemeColor>
                <Header />
                <Principal />
                <About />
                <Proyectos />
                <Slider />
            </ThemeColor>
            <Footer />
        </main>
    );
}

export default Layout;