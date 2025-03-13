import Header from "@/components/Header";
import Home from "./Pages/Home";
import Footer from "@/components/Footer";
export default function Main() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
