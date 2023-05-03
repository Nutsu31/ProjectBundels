import { Box, Button, Checkbox, FormControl, TextField } from "@mui/material";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";
import { ACTIONS } from "../../pages/Todo";
interface InputFieldType {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  reset: UseFormReset<FieldValues>;
  dispatch: React.Dispatch<any>;
}

const InputField = ({
  register,
  handleSubmit,
  reset,
  dispatch,
}: InputFieldType) => {
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    if (data.complete) {
      dispatch({ type: ACTIONS.COMPLETE_TODOS, payload: { names: data.todo } });
    } else {
      dispatch({ type: ACTIONS.ADD_TODOS, payload: { names: data.todo } });
    }
    reset({ todo: "" });
  });

  return (
    <Box
      sx={{
        width: { sm: 270, md: 370, lg: 470, xl: 620 },
        height: 80,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "ButtonHighlight",
        gap: 4,
      }}
    >
      <form onSubmit={onSubmit} style={{ display: "flex" }}>
        <FormControl
          sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
        >
          <Checkbox {...register("complete")} />
          <TextField
            label="Add Todo"
            {...register("todo")}
            sx={{ width: { sm: 130, md: 230, lg: 330, xl: 470 } }}
          />

          <Button type="submit" variant="contained">
            Add
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default InputField;
