import { Button } from "@mui/material";

const Buttons = ({
  setStarted,
}: {
  started: boolean;
  setStarted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Button
      sx={{
        fontSize: 40,
        position: "absolute",
        left: "50%",
        top: "50%",
        translate: "-50%",
        zIndex: 10,
      }}
      onClick={() => setStarted((curr) => !curr)}
    >
      Start
    </Button>
  );
};

export default Buttons;
