import { Box } from "@mui/material";

const Score = ({
  player,
  started,
  count,
}: {
  count: number;
  started: boolean;
  player: string;
}) => {
  return (
    <Box
      sx={{
        width: "160px",
        height: "160px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        transition: "0.3s ease",
        bottom: started ? 60 : -200,
        backgroundColor: player === "player1" ? "darksalmon" : "lightgreen",
      }}
    >
      <h1 style={{ fontSize: 102, color: "white", fontWeight: 100 }}>
        {count}
      </h1>
    </Box>
  );
};

export default Score;
