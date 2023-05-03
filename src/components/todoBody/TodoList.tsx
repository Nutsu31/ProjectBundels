import { Done, DeleteOutline } from "@mui/icons-material";
import { Box } from "@mui/material";
import { ACTIONS } from "../../pages/Todo";

export interface todoType {
  id?: number;
  names?: string;
  complete?: boolean;
  date?: string;
}

const TodoList = ({
  todos,
  dispatch,
}: {
  todos: Array<todoType | undefined>;
  dispatch: React.Dispatch<any>;
}) => {
  return (
    <Box
      sx={{
        width: { sm: 270, md: 370, lg: 470, xl: 620 },
        minHeight: "500px",
        padding: "24px",
        boxSizing: "border-box",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "ButtonHighlight",
        gap: 4,
      }}
    >
      {todos?.map((todo) => (
        <Box
          key={Math.random() * Math.random()}
          sx={{
            width: "100%",
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: todo?.complete ? "seagreen " : "InfoBackground",
            color: todo?.complete ? "white" : "black",
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              padding: 1,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <span>{todo?.names}</span>
            <span>{todo?.date}</span>
          </Box>
          {todo?.complete ? <p>Completed!!!</p> : null}
          <Box>
            <Done
              style={{ color: todo?.complete ? "white" : "green" }}
              onClick={() =>
                dispatch({
                  type: ACTIONS.TOGGLE_TODOS,
                  payload: { id: todo?.id },
                })
              }
            />
            <DeleteOutline
              style={{ color: "red" }}
              onClick={() =>
                dispatch({
                  type: ACTIONS.REMOVE_TODOS,
                  payload: { id: todo?.id },
                })
              }
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default TodoList;
