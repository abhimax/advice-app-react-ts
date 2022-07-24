import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { Search } from "./search";

describe("Test Search Component", () => {
    test("It should test for text in Search compoment", () => {
        render(<Search />);
        
        expect(screen.getByText("Search")).toBeTruthy();
        expect(screen.getByText("Search for more advice:")).toBeTruthy();
    });

    test("It should search advice with the name Jest", async () => {
        const search = jest.fn();
        render(<Search />);
        
        userEvent.type(screen.getByPlaceholderText(/^search/i), "Jest");
        userEvent.click(screen.getByText("Search"));
        
        await act(async () => search("jest"));
        expect(search).toBeCalled();
    });
});
