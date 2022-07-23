import {
  render,
  waitFor,
  waitForElementToBeRemoved,
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
    const { getByText, debug, getAllByPlaceholderText } = render(<App />);

    const inputElement = getAllByPlaceholderText("Novo Item");

    // const addButton = getByText("Adicionar");

    debug();

    // userEvent.type(inputElement, "Novo");
    // userEvent.click(addButton);

    debug();

    // expect(await getByText("Novo")).toBeInTheDocument();
    // await waitFor(() => {
    //   expect(getByText("Novo")).toBeInTheDocument();
    // });
  });

  it("should be able to remove  item from the list", async () => {
    const { queryByText, getAllByText, debug } = render(<App />);

    const removeButton = getAllByText("Remover");
    debug();

    userEvent.click(removeButton[0]);

    debug();

    await waitForElementToBeRemoved(() => {
      return queryByText("high");
    });
    // expect(await getByText("high")).toBeInTheDocument();

    // await waitFor(() => {
    //   expect(getByText("high")).not.toBeInTheDocument();
    // });
  });
});
