import { Box } from "@mui/material";
import Player from "../components/DiceGameBody/Player";
import Buttons from "../components/DiceGameBody/buttons/Buttons";
import { useEffect, useState } from "react";
import Winner from "../components/DiceGameBody/Winner";

const PigDice = () => {
  const [started, setStarted] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    setCount1(0);
    setCount2(0);
    setPlayerTurn(1);
    setStarted(false);
  }, [reset]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "blanchedalmond",
      }}
    >
      <h1 style={{ fontSize: 114, fontWeight: 100 }}>Dice Roll</h1>
      <Box
        sx={{
          width: "1200px",
          height: "700px",
          backgroundColor: "white",
          display: "flex",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {count1 >= 100 || count2 >= 100 ? (
          <Winner
            setReset={setReset}
            player={count1 >= 100 ? "Player 1" : "Player 2"}
          />
        ) : null}
        <Player
          count1={count1}
          setCount1={setCount1}
          count2={count2}
          setCount2={setCount2}
          player="player1"
          started={started}
          setPlayerTurn={setPlayerTurn}
          playerTurn={playerTurn}
        />
        {started ? null : <Buttons setStarted={setStarted} started={started} />}
        <Player
          count1={count1}
          setCount1={setCount1}
          count2={count2}
          setCount2={setCount2}
          player="player2"
          started={started}
          setPlayerTurn={setPlayerTurn}
          playerTurn={playerTurn}
        />
      </Box>
    </Box>
  );
};

export default PigDice;
