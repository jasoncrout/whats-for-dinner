import { Button, Typography } from "@mui/material";

export default function FoodButton({
  onClick,
  foodInputText,
  setAnswer,
}: {
  onClick: any;
  foodInputText: string;
  setAnswer: any;
}) {
  return (
    <Typography align="center">
      <Button
        variant="contained"
        onClick={async () => {
          const answer = await onClick(foodInputText);
          setAnswer(answer);
        }}
      >
        Cook up some options
      </Button>
    </Typography>
  );
}
