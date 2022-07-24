import React from "react";
import { useEffect, useState, MouseEvent } from "react";
import getListOfAdvice from "../../hooks/getAdvice";

export const Advice = () => {
    const [advice, setAdvice] = useState("Loading...");

    useEffect(() => {
        getAdvice();
    }, []);

    const getAdvice = async () => {
        const data = await getListOfAdvice();
        setAdvice(data);
    };

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setAdvice("Loading...");
        getAdvice();
    };

    return (
        <>
            <h1>Are you looking for advice?</h1>

            <p>"{advice}"</p>

            <form>
                <button onClick={onClick} disabled={advice === "Loading..."}>
                    Gimme more advice!
                </button>
            </form>
        </>
    );
};
