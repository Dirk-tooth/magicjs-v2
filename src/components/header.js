import React from "react";
import { Button, Header, Menu } from "grommet";
import { Debian } from "grommet-icons";

export default function NewHeader(props) {
  return (
    <Header background="brand">
      <Button hoverIndicator icon={<Debian />} label="planer protal" />
      <Menu label="account" items={[{ label: "logout" }]} />
    </Header>
  );
}
