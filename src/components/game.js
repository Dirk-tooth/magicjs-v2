import React, { useState } from "react";
import { Box, Button } from "grommet";

import Player from "./player";

export default function Game(props) {
  const [players, setPlayers] = useState([<Player key={0} />]);

  return (
    <Box>
      <Box>
        <Button
          label="add player"
          margin="medium"
          primary={true}
          size="medium"
          onClick={players =>
            setPlayers(players => {
              const newPlayers = players.map(i => i);
              newPlayers.push(<Player key={players.length + 1} />);
              return newPlayers;
            })
          }
          width="medium"
        />
      </Box>
      <Box direction="row" justify="center" wrap>
        {players}
      </Box>
    </Box>
  );
}
