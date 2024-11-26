import TopBanner from "./components/TopBanner/TopBanner"
import Navbar from "./components/Navbar/Navbar";
import Hero1 from "./components/HeroSection1/Hero1";
import LogosSection from "./components/Logos/Logos";
import Arrivals from "./components/ArrivalsSection/Arrivals";
import Line from "./components/Line/Line";
import TopSelling from "./components/TopSelling/TopSelling";
import DressStyle from "./components/DressStyle/DressStyle";
import Customers from "./components/HappyCustomers/Customers";
import Footer from "./components/Footer/Footer";


export default function Home() {
  return (
    <div className="main relative">
      <TopBanner />
      <Navbar />
      <Hero1 />
      <LogosSection />
      <Arrivals />
      <Line />
      <TopSelling />
      <DressStyle />
      <Customers />
      <Footer />
              
    </div>
  );
}