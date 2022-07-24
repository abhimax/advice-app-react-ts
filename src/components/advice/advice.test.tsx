import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import { Advice } from "./advice";

describe("Test Advice Component", () => {
    test("It should test for text in Advice compoment", () => {
        render(<Advice />);

        expect(screen.getByText("Gimme more advice!")).toBeTruthy();
        expect(screen.getByText("Are you looking for advice?")).toBeTruthy();
    });

    test("It should test for Gimme more advice button", async () => {
        render(<Advice />);

        fireEvent.click(screen.getByText("Gimme more advice!"));
        expect(screen.getByText("Gimme more advice!")).toBeInTheDocument();
    });
});
