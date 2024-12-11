import { useState } from "react";
import styles from "../styles/index.module.css";

function Home() {
    const [user, setUser] = useState("(Insira Nome)");

    const handleChange = (event) => {
        setUser(event.target.value ? event.target.value : "(Insira Nome)");
    }

    return (
        <>
            <div>Bem vindo, {user}</div>
            <input onChange={handleChange}></input>
        </>
    )
}

export default Home