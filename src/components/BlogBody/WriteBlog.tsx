import {
  Button,
  FormControl,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface WriteBlogType {
  register: UseFormRegister<FieldValues>;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}

const WriteBlog = ({ register, onSubmit }: WriteBlogType) => {
  return (
    <form style={{ width: "500px" }} onSubmit={onSubmit}>
      <FormControl sx={{ width: "100%" }}>
        <TextField
          label="Author"
          type="text"
          sx={{ width: "100%" }}
          {...register("author")}
        />
        <TextField
          label="Title"
          type="text"
          sx={{ width: "100%" }}
          {...register("title")}
        />
        <TextareaAutosize
          placeholder="Blog"
          minRows={10}
          {...register("blog")}
        />
        <Button variant="contained" type="submit">
          Add Blog
        </Button>
      </FormControl>
    </form>
  );
};

export default WriteBlog;
