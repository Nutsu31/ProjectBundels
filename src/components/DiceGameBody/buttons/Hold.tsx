import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import { Button } from "@mui/material";

function handleChange(
  value: number,
  setCount: React.Dispatch<React.SetStateAction<number>>,
  setPlayer: React.Dispatch<React.SetStateAction<number>>,
  setCurrValue: React.Dispatch<React.SetStateAction<number>>
) {
  setPlayer((curr) => (curr === 1 ? 2 : 1));
  setCount((curr) => curr + value);
  setCurrValue((curr) => (curr = 0));
}

const Hold = ({
  setPlayerTurn,
  currentValue,
  setCount,
  setCurrentValue,
}: {
  setCurrentValue: React.Dispatch<React.SetStateAction<number>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  currentValue: number;
  setPlayerTurn: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <Button
      onClick={() =>
        handleChange(currentValue, setCount, setPlayerTurn, setCurrentValue)
      }
    >
      <PublishedWithChangesIcon
        sx={{ fontSize: 44, fontWeight: 100, color: "orange", margin: 2 }}
      />
    </Button>
  );
};

export default Hold;
