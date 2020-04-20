import React from "react";
import { Button, Header, Menu } from "grommet";
import { Home } from "grommet-icons";

export default function NewHeader(props) {
  return (
    <Header background="brand">
      <Button icon={<Home />} hoverIndicator />
      <Menu label="account" items={[{ label: "logout" }]} />
    </Header>
  );
}
