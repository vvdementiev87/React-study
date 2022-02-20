import { Chat } from "./chat";
import { renderWithRedux } from "../../utils/render-with-redux";
import userEvent from "@testing-library/user-event";

describe("Chat component", () => {
  it("should render Chat with title prop", () => {
    const TITLE = "test";
    const { container } = renderWithRedux(<Chat title={TITLE} />, {});

    const nodes = [...container.querySelectorAll(".MuiListItemText-root")];

    console.log("Nodes", nodes);

    expect(nodes[0]).toHaveTextContent(TITLE);
  });
  it("should render Chat with selected prop", () => {
    const TITLE = "test";
    const { container, getByTestId, getAllByRole } = renderWithRedux(
      <Chat selected title={TITLE} />,
      {}
    );

    console.log("container", container);
    console.log("button", getAllByRole("button"));

    expect(getAllByRole("button")[0]).toHaveClass("Mui-selected");
  });
  it("should render Chat with handleListItemClick prop", () => {
    const TITLE = "test";
    const handleListItemClick = jest.fn();
    const { container, getAllByRole } = renderWithRedux(
      <Chat handleListItemClick={handleListItemClick} title={TITLE} />,
      {}
    );
    const button = getAllByRole("button")[0];
    userEvent.click(button);
    expect(handleListItemClick).toBeCalledTimes(1);
  });
  it("should render Chat with deleteConversationByName prop", () => {
    const TITLE = "test";
    const deleteConversationByName = jest.fn();
    const { container, getAllByRole } = renderWithRedux(
      <Chat
        deleteConversationByName={deleteConversationByName}
        title={TITLE}
      />,
      {}
    );
    const button = getAllByRole("button")[1];
    userEvent.click(button);
    expect(deleteConversationByName).toBeCalledTimes(1);
  });
});
