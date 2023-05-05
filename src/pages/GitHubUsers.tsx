import { Box, Button } from "@mui/material";
import FindUser from "../components/GithubUsersBody/FindUser";
import { useReducer, useState } from "react";
import User, { UserType } from "../components/GithubUsersBody/User";
import { Delete } from "@mui/icons-material";

export const ACTIONS = {
  GET_USERS: "get-users",
  SET_LOADING: "set-loading",
  CLEAR_USER: "clear-user",
};

interface actionType {
  type: string;
  payload: {
    data: UserType;
  };
}

function reducer(user: UserType, action: actionType) {
  switch (action.type) {
    case ACTIONS.GET_USERS:
      return action.payload.data;
    case ACTIONS.CLEAR_USER:
      return action.payload.data;
  }
  return user;
}

const initialState = {
  avatar_url: "",
  followers: 0,
  following: 0,
  id: 0,
  location: "",
  login: "",
  name: "",
  public_repos: 0,
  url: "",
};
const GitHubUsers = () => {
  const [loading, setLoading] = useState(false);
  const [cleaning, setCleaning] = useState(false);
  const [user, dispatch] = useReducer(reducer, initialState);

  const handleClean = () => {
    setCleaning(true);
    try {
      dispatch({ type: ACTIONS.CLEAR_USER, payload: { data: initialState } });
      setTimeout(() => {
        setCleaning(false);
      }, 200);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(user);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <FindUser loading={loading} dispatch={dispatch} setLoading={setLoading} />
      <User user={user} />
      <Box
        sx={{
          width: { xs: 200, sm: 250, md: 350, lg: 450, xl: 536 },
          marginTop: 2,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button variant="contained" onClick={handleClean}>
          <Delete />
          {cleaning ? "Cleaning..." : "Clean"}
        </Button>
      </Box>
    </Box>
  );
};

export default GitHubUsers;
