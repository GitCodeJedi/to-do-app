import React, { useState } from "react"; // Импортируем useState
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./item/Create-todo-field/CreateTodoField";

const data = [
  {
    _id: "w2d2qd",
    title: "Finish the essay collaboration",
    isComplited: false,
  },
  {
    _id: "w2d2qdwwq",
    title: "Read next chapter of the book",
    isComplited: false,
  },
  {
    _id: "w2d2qd1221",
    title: "Send the finished assignment",
    isComplited: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isComplited = !current.isComplited; // Переключаем состояние
    setTodos(copy); // Обновляем состояние
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t._id !== id));
  };

  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-8">
        «Список дел на день»
      </h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  );
};

export default Home;
