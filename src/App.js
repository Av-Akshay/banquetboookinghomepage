import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Menu from "./components/menu/Menu";
import CenterSection from "./components/center-Component/CenterSection";
import Cities from "./components/Cities";
import Banquets from "./components/banquet-card/Banquets";
import FindAndEnjoyBanquet from "./components/stepsToFindBanquet/FindAndEnjoyBanquet";
import Grow from "./components/growth-component/Grow";
import Offers from "./components/offersComponent/Offers";
import Fotter from "./components/footer/Fotter";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Menu />
      <CenterSection />
      <Cities />
      <Banquets />
      <FindAndEnjoyBanquet />
      <Grow />
      <Offers />
      <Fotter />
    </>
  );
}

export default App;
