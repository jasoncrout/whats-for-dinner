import { TextField } from "@mui/material";

export default function FoodInput({ setText }: { setText: any }) {
  return (
    <TextField
      fullWidth={true}
      id="outlined-multiline-flexible"
      label="Give me some ideas!"
      multiline
      maxRows={4}
      onChange={(event) => {
        setText(event.target.value);
      }}
    />
  );
}
