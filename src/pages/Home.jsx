import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import CoffeeCards from "../components/CoffeeCards";
import ShowMore from "../components/ShowMore";
import { useState } from "react";

const Home = () => {
    const data = useLoaderData()
    const [coffees, setCoffees] = useState(data)
    return (
        <div>
            <Banner></Banner>
            <CoffeeCards coffees={coffees} setCoffees={setCoffees}></CoffeeCards>
            <ShowMore></ShowMore>
        </div>
    );
};

export default Home;