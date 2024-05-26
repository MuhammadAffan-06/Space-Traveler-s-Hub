import Navbar from "./Navbar";

const handleCLick = async () => {
    try {
        const response = await fetch("https://api.spacexdata.com/v4/rockets", {
            method: "GET"
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
const Rockets = () => {
    return (
        <>
            <Navbar />
            <button onClick={() => { handleCLick() }} >Click me</button>
        </>
    );
}

export default Rockets;