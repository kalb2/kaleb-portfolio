import { useContext } from "react";
import { TodoContext } from "./SimpleTodo";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <ul id="list">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </ul>
  );
};
