import { useState } from "react";

function App() {
  const [list, setList] = useState(["high", "lucas", "herbert"]);
  const [newItem, setNewItem] = useState("");

  function addToList() {
    setTimeout(() => {
      setList((state) => [...state, newItem]);
    }, 500);
  }
  function removeFromList(item: string) {
    setTimeout(() => {
      setList((state) => state.filter((item) => item !== item));
    }, 500);
  }

  return (
    <>
      <h1 className="high-name">Hello World</h1>
      <h2 data-testid="dev">lander</h2>
      <input
        placeholder="Novo Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => removeFromList(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
