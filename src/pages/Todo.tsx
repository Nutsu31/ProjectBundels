import { Box } from "@mui/material";
import { useEffect, useReducer } from "react";
import { useForm } from "react-hook-form";
import InputField from "../components/todoBody/InputField";
import TodoList, { todoType } from "../components/todoBody/TodoList";

export const ACTIONS = {
  ADD_TODOS: "add_todos",
  COMPLETE_TODOS: "complete_todos",
  TOGGLE_TODOS: "toggle_todos",
  REMOVE_TODOS: "remove_todos",
};

const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Frieday",
  "Saturday",
];

const date = new Date();
const dd = date.getDay();
const hr = date.getHours();
const min = date.getMinutes();

interface actionType {
  payload: {
    names: string;
    complete: boolean;
    id: number;
    date: string;
  };
  type: string;
}

function reducer(todos: Array<todoType>, action: actionType) {
  switch (action.type) {
    case ACTIONS.ADD_TODOS:
      return [...todos, newTodo(action.payload.names)];

    case ACTIONS.COMPLETE_TODOS:
      return [...todos, completeTodo(action.payload.names)];

    case ACTIONS.TOGGLE_TODOS:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    case ACTIONS.REMOVE_TODOS:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}
function newTodo(names: string) {
  return {
    id: Date.now(),
    names: names,
    date: `${hr}:${min}, ${weekDay[dd]}`,
    complete: false,
  };
}

function completeTodo(names: string) {
  return {
    id: Date.now(),
    names: names,
    date: `${hr}:${min}, ${weekDay[dd]}`,
    complete: true,
  };
}

const getItemsFromLocal = () => {
  let list = JSON.parse(localStorage.getItem("todos")!);
  if (list) {
    return list;
  } else {
    return [];
  }
};

const Todo = () => {
  const { register, handleSubmit, reset } = useForm();
  const [todos, dispatch] = useReducer(reducer, getItemsFromLocal());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <Box
      sx={{
        width: "100%",
        // minHeight: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <InputField
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
        dispatch={dispatch}
      />
      <TodoList todos={todos} dispatch={dispatch} />
    </Box>
  );
};

export default Todo;
