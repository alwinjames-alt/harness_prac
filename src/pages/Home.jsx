import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import useTodos from "../hooks/useTodos";

export default function Home() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodos();

  return (
    <div style={{ padding: 20 }}>
      <h1>Todo App (CRUD)</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
    </div>
  );
}
