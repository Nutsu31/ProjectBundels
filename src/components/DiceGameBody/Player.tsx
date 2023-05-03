import { Box } from "@mui/material";
import { useState } from "react";
import Score from "./Score";
import Roll from "./buttons/Roll";

interface PlayerType {
  player: string;
  started: boolean;
  playerTurn: number;
  count1: number;
  setCount1: React.Dispatch<React.SetStateAction<number>>;
  count2: number;
  setCount2: React.Dispatch<React.SetStateAction<number>>;
  setPlayerTurn: React.Dispatch<React.SetStateAction<number>>;
}

function whosTurnWithBgColor(player: string, turn: number) {
  if (player === "player1" && turn === 1) {
    return "white";
  } else if (player === "player2" && turn === 2) {
    return "white";
  } else {
    return "ButtonFace";
  }
}

const Player = ({
  count1,
  setCount1,
  count2,
  setCount2,
  player,
  started,
  playerTurn,
  setPlayerTurn,
}: PlayerType) => {
  const [currentValue1, setCurrentValue1] = useState(0);
  const [currentValue2, setCurrentValue2] = useState(0);

  return (
    <Box
      sx={{
        width: "600px",
        height: "700px",
        backgroundColor: whosTurnWithBgColor(player, playerTurn),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: started ? 0 : -200,
          transition: "0.3s ease",
        }}
      >
        <h1 style={{ fontSize: 55, fontWeight: 100 }}>
          {player === "player1" ? "Player 1" : "Player 2"}
        </h1>
        <h2 style={{ fontSize: 105, fontWeight: 100, textAlign: "center" }}>
          {player === "player1" ? count1 : count2}
        </h2>
      </div>
      <Score
        player={player}
        started={started}
        count={player === "player1" ? currentValue1 : currentValue2}
      />
      {playerTurn === 1 && player === "player1" && started ? (
        <Roll
          setCount={setCount1}
          setPlayerTurn={setPlayerTurn}
          setCurrentValue={setCurrentValue1}
          currentValue={currentValue1}
        />
      ) : null}
      {playerTurn === 2 && player === "player2" && started ? (
        <Roll
          setCount={setCount2}
          setPlayerTurn={setPlayerTurn}
          setCurrentValue={setCurrentValue2}
          currentValue={currentValue2}
        />
      ) : null}
    </Box>
  );
};

export default Player;
