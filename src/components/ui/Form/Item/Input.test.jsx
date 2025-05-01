import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Index from "./Input";

import { SampleData } from "@config";

describe("FormField Component", () => {
    it("renders a text input", () => {
        render(<Index type="text" label="Text Input" placeholder="Enter text..." />);
        const input = screen.getByPlaceholderText("Enter text...");
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("type", "text");
    });

    it("renders an email input", () => {
        render(<Index type="email" label="Email Input" placeholder="Enter email..." />);
        const input = screen.getByPlaceholderText("Enter email...");
        expect(input).toHaveAttribute("type", "text");
    });

    it("renders a number input and updates value", () => {
        const onChange = vi.fn()
        render(<Index type="int" label="Number" placeholder="Enter number..." onChange={onChange} />);
        const input = screen.getByPlaceholderText("Enter number...");
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: "42" } });
        expect(input.value).toBe(42);
    });

    it("renders a dropdown with options", () => {
        render(<Index type="dropdown" label="Select an option" selection={SampleData.Platform} />);
        const dropdown = screen.getByRole("combobox");
        expect(dropdown).toBeInTheDocument();
    });

    it("renders a switch component", () => {
        render(<Index type="switch" label="Enable Feature" />);
        const switchInput = screen.getByRole("checkbox");
        expect(switchInput).toBeInTheDocument();
        fireEvent.click(switchInput);
        expect(switchInput.checked).toBe(false);
    });
});
