import React from "react";
import { Anchor, Footer, Text } from "grommet";

export default function NewFooter(props) {
  return (
    <Footer background="brand" pad="medium">
      <Text>Copyright</Text>
      <Anchor label="About" />
    </Footer>
  );
}
