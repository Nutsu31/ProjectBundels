import { Box } from "@mui/material";

export interface UserType {
  avatar_url: string;
  followers: number;
  following: number;
  id: number;
  location: string;
  login: string;
  name: string;
  public_repos: number;
  url: string;
}

const User = ({ user }: { user: UserType }) => {
  return (
    <Box
      sx={{
        width: { xs: 200, sm: 250, md: 350, lg: 450, xl: 536 },
        marginTop: 2,
        height: 400,
        backgroundColor: "ButtonFace",
      }}
    >
      {user.login ? (
        <>
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <img
              src={user.avatar_url}
              style={{ width: 60, borderRadius: "50%" }}
            />
            <h3>Following: {user.following}</h3>
            <h3>Followers: {user.followers}</h3>
            <h3>Repositories: {user.public_repos}</h3>
          </Box>
          <Box>
            <p>UserID: {user.id}</p>
            <p>User Name: {user.name}</p>
            <p>User Login: {user.login}</p>
            <p>User Location: {user.location}</p>
            <p>User URL: {user.url}</p>
          </Box>
        </>
      ) : null}
    </Box>
  );
};

export default User;
