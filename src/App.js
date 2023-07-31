import React from "react";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>MY TODOS</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Deploy my app" />
      <Todo text="Get users!" />
    </div>
  );
}

export default App;
