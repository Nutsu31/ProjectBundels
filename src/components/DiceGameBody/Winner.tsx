import { Replay } from "@mui/icons-material";
import { Button } from "@mui/material";

const Winner = ({
  player,
  setReset,
}: {
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  player: string;
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 2,
        position: "absolute",
        zIndex: 2,
        top: 0,
        left: 0,
        background: "gray",
      }}
    >
      <h1>Winner is {player}</h1>
      <Button onClick={() => setReset((curr) => !curr)}>
        <Replay /> Restart Game
      </Button>
    </div>
  );
};

export default Winner;
