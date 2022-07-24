import {
  render,
  waitFor,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App Component", () => {
  it("should render class and name to document", () => {
    const { getByText, getAllByTestId } = render(<App />);

    expect(getByText("Hello World")).toHaveAttribute("class", "high-name");

    expect(getByText("Hello World")).toBeInTheDocument();

    expect(getAllByTestId("dev"));
  });

  it("should render list items", () => {
    const { getByText } = render(<App />);

    expect(getByText("high")).toBeInTheDocument();
    expect(getByText("lucas")).toBeInTheDocument();
    expect(getByText("herbert")).toBeInTheDocument();
  });

  it("should be able to and new item to the list", async () => {
    const { getByText, debug, getAllByPlaceholderText, queryByText } = render(
      <App />
    );

    const inputElement = getAllByPlaceholderText("Novo Item");

    const addButton = getByText("Adicionar");

    // debug();

    userEvent.type(screen.getByText("Check"));
    userEvent.click(addButton);

    // debug();

    // expect(await queryByText("Novo")).toBeInTheDocument();
    await waitFor(() => {
      expect(queryByText("Novo"));
    });
  });

  it("should be able to remove  item from the list", async () => {
    const { queryByText, getAllByText, debug } = render(<App />);

    const removeButton = getAllByText("Remover");
    // debug();

    userEvent.click(removeButton[0]);

    // debug();
    // await waitForElementToBeRemoved(() => {
    //   return queryByText("high");
    // });

    expect(await queryByText("high")).toBeInTheDocument();
// await waitFor(() => {
    //   expect(getByText("high")).not.toBeInTheDocument();
    // });
  });
});
