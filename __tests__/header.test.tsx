import { expect, it, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Home from "../src/app/page";

it("home test", () => {
  render(<Home />);
  screen.debug();
});
