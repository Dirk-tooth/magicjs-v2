import React, { useState } from "react";
import { Box, Button, Text, TextInput } from "grommet";

import Counter from "./counter.js";

export default function Player(props) {
  const [player, setPlayer] = useState("");
  const [life, setLife] = useState(20);
  const [counters, setCounters] = useState([]);

  return (
    <Box
      border={false}
      justify="start"
      margin="small"
      pad="medium"
      width="medium"
    >
      <TextInput
        onChange={event => setPlayer(event.target.value)}
        placeholder="Player Name"
        size="xxlarge"
        style={{ textAlign: "center" }}
        value={player}
      />
      <Text textAlign="center" margin="large" style={{ fontSize: 100 }}>
        {life}
      </Text>
      <Box direction="row" justify="center">
        <Button
          label="-"
          margin="small"
          onClick={() => {
            setLife(life - 1);
          }}
        />
        <Button
          label="+"
          margin="small"
          onClick={() => {
            setLife(life + 1);
          }}
        />
      </Box>
      <Button
        label="add counter"
        margin="small"
        onClick={counters =>
          setCounters(counters => {
            const newCounters = counters.map(i => i);
            newCounters.push(
              <Counter idx={counters.length} key={counters.length + 1} />
            );
            return newCounters;
          })
        }
      />
      {counters}
    </Box>
  );
}
