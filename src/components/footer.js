import React from "react";
import { Anchor, Footer, Text } from "grommet";

export default function NewFooter(props) {
  return (
    <Footer background="brand" pad="medium">
      <Text>Copyright 2020</Text>
      <Anchor label="About" />
    </Footer>
  );
}
