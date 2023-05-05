import { Box } from "@mui/material";
import FindUser from "../components/GithubUsersBody/FindUser";
import { useReducer, useState } from "react";
import User, { UserType } from "../components/GithubUsersBody/User";

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
  const [user, dispatch] = useReducer(reducer, initialState);

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
    </Box>
  );
};

export default GitHubUsers;
