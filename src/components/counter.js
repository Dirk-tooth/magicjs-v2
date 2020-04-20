import React, { useState } from "react";
import { Box, Button, Text, TextInput } from "grommet";

export default function Counter(props) {
  const [player, setPlayer] = useState("");
  const [life, setLife] = useState(0);
  console.log(props);
  return (
    <Box border={false} justify="around" margin="small" pad="medium">
      <TextInput
        onChange={event => setPlayer(event.target.value)}
        placeholder={`Counter ${props.idx + 1}`}
        size="medium"
        style={{ textAlign: "center" }}
        value={player}
      />
      <Text margin="medium" size="xxlarge" textAlign="center">
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
    </Box>
  );
}
