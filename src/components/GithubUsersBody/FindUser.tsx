import { Button, FormControl, TextField } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { ACTIONS } from "../../pages/GitHubUsers";
import axios from "axios";

const FindUser = ({ loading, setLoading, dispatch }: FieldValues) => {
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    setLoading(true);
    async function getUser() {
      axios
        .get(`https://api.github.com/users/${data.name}`)
        .then((res) => {
          setLoading(false);
          dispatch({ type: ACTIONS.GET_USERS, payload: { data: res.data } });
        })
        .catch((err) => console.log(err));
    }
    getUser();
    reset({
      name: "",
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <TextField
          variant="outlined"
          sx={{ width: { xs: 200, sm: 250, md: 350, lg: 450 } }}
          label="Find Github User"
          {...register("name")}
        />
      </FormControl>
      <Button type="submit" variant="contained" sx={{ height: 55 }}>
        {loading ? "Loading..." : "Search"}
      </Button>
    </form>
  );
};

export default FindUser;
