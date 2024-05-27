import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Cards from "./Cards";

const Rockets = () => {
    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        const fetchRockets = async () => {
            try {
                const response = await fetch("https://api.spacexdata.com/v4/rockets", {
                    method: "GET"
                });
                const data = await response.json();
                setRockets(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchRockets();
    }, []);

    return (
        <>
            <Navbar />
            <Cards rockets={rockets} />
        </>
    );
}

export default Rockets;
