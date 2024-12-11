"use client"
import { useState } from "react";
import Link from "next/link";

export default function Page() {

    const [user, setUser] = useState("Undefined");

    const handleChange = (event) => {
        setUser(event.target.value ? event.target.value : "Undefined")
    }

    return (
        <>
            <input onChange={handleChange}></input>
            <Link href={`/view/${user}`}>Enviar</Link>
        </>
    );
}
