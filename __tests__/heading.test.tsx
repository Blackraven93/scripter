import { expect, it, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../src/app/page";

it("home test", () => {
  render(<Home />);

  screen.getByRole("heading");
  expect(screen.getByRole("heading")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(/Hello/i);
});
