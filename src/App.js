import React, { useState, useMemo } from "react";
import { Box, Grommet } from "grommet";

import "./App.css";

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

import { GameContext } from "./contexts/GameContext";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

function App() {
  const [game, setGame] = useState({
    players: [
      {
        player: "Player Name",
        life: 20,
        counters: []
      }
    ]
  });

  const value = useMemo(() => ({ game, setGame }), [game, setGame]);

  return (
    <GameContext.Provider value={value}>
      <Grommet theme={theme}>
        <Box fill="vertical" direction="column">
          <Header />
          <Main flex={1} />
          <Footer />
        </Box>
      </Grommet>
    </GameContext.Provider>
  );
}

export default App;
