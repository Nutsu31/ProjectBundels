import { Loop } from "@mui/icons-material";
import Hold from "./Hold";
import { Button } from "@mui/material";

const Roll = ({
  setCount,
  setPlayerTurn,
  setCurrentValue,
  currentValue,
}: {
  currentValue: number;
  setCurrentValue: React.Dispatch<React.SetStateAction<number>>;
  setPlayerTurn: React.Dispatch<React.SetStateAction<number>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  function randomDice(
    setState: React.Dispatch<React.SetStateAction<number>>,
    setPlayer: React.Dispatch<React.SetStateAction<number>>
  ) {
    let randomNum = Math.round(Math.random() * 10);
    if (randomNum === 1) {
      setState((currentState) => (currentState = 0));
      setPlayer((currentPlayer) => (currentPlayer === 1 ? 2 : 1));
    } else if (randomNum > 6) {
      return setState((currentState) => currentState + (randomNum - 4));
    } else {
      return setState((currentState) => currentState + randomNum);
    }
  }

  return (
    <>
      <Button onClick={() => randomDice(setCurrentValue, setPlayerTurn)}>
        <Loop sx={{ fontSize: 84, fontWeight: 100 }} />
      </Button>
      <Hold
        setPlayerTurn={setPlayerTurn}
        currentValue={currentValue}
        setCount={setCount}
        setCurrentValue={setCurrentValue}
      />
    </>
  );
};

export default Roll;
