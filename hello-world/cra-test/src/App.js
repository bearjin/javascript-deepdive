import TodoList from "./TodoList";

console.log(`NODE_ENV = ${process.env.NODE_ENV}`);

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
