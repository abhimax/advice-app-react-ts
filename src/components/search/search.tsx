import React from "react";
import { useState, FormEvent } from "react";
import searchAdvice from "../../hooks/searchAdvice";

export const Search = () => {
    const [advices, setAdvices] = useState<any[]>([]);
    const [term, setTerm] = useState<string>("");

    const getAdvice = async (term: string) => {
        const data = await searchAdvice(term);
        setAdvices(data);
    };

    const onSubmit = (e: FormEvent<HTMLFormElement | HTMLInputElement>) => {
        e.preventDefault();
        getAdvice(term);
    };

    return (
        <main>
            <form onSubmit={onSubmit}>
                <p>Search for more advice:</p>
                <input
                    placeholder="search"
                    type="text"
                    name="term"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
                <button>Search</button>
            </form>
            {advices ? (
                <ul className="results">
                    {advices.map((result, index) => (
                        <li key={index}>{result.advice}</li>
                    ))}
                </ul>
            ) : (
                <span>No Results found</span>
            )}
        </main>
    );
};
