"use client";
import {
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import FoodTitle from "./foodTitle";
import FoodInput from "./foodInput";
import FoodButton from "./foodButton";
import { useState } from "react";
import { Roboto } from "next/font/google";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "700",
});

export default function App({
  fetchFoodSuggestions,
}: {
  fetchFoodSuggestions: (foodInputText: string) => Promise<string>;
}) {
  const [text, setText] = useState<string>("");

  const [answer, setAnswer] = useState<string>("");

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main className={roboto.className}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          direction="column"
          style={{ minHeight: "100vh" }}
        >
          <Grid
            container
            item
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <FoodTitle />
            </Grid>
            <Grid item xs={10} md={8} lg={6}>
              <FoodInput setText={setText} />
            </Grid>
            <Grid item xs={12}>
              <FoodButton
                onClick={fetchFoodSuggestions}
                foodInputText={text}
                setAnswer={setAnswer}
              />
            </Grid>
            <Grid item xs={10} md={8} lg={6}>
              <Typography
                variant="body1"
                align="center"
                style={{ whiteSpace: "pre-line" }}
              >
                {answer}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </ThemeProvider>
  );
}
