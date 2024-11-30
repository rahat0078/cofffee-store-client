import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer';

const Root = () => {
  return (
    <div className="font-rancho">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  );
};

export default Root;
