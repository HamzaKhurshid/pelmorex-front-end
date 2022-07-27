import { render, screen, act } from "@testing-library/react";
import Menu from "../../../components/Menu";

test("Menu must be present", async () => {
  await act(async () => render(<Menu/>));
  const element = screen.getByTestId('app-menu');
  expect(element).toBeInTheDocument()
});

test("Menu must have About Component", async () => {
  await act(async () => render(<Menu/>));
  expect(screen.getByTestId('about-menu-item')).toBeInTheDocument();
});

test("Menu must have List Component", async () => {
  await act(async () => render(<Menu/>));
  expect(screen.getByTestId('list-menu-item')).toBeInTheDocument();
});