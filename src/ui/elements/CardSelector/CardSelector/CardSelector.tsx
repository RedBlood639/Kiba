import React, { useState, useEffect } from "react";
import {
  CardSelectorLayout,
  Dropdowndiv,
  Text,
  TextNumber,
  IconPair,
} from "./CardSelector.styled";

type props = {
  icon: any;
  text: string;
  value: number;
  getvalue: Function;
};

import { Dropdown } from "assets/icon";

const CardSelector: React.FC<props> = (props) => {
  const [valid, setValid] = useState(0);

  useEffect(() => {
    setValid(props.value);
  }, [props]);

  const changedInput = (event: any) => {
    if (event.target.value == "") {
      setValid(0);
      props.getvalue(0);
    } else {
      setValid(event.target.value);
      props.getvalue(event.target.value);
    }
  };
  return (
    <CardSelectorLayout>
      <Dropdowndiv>
        <IconPair>
          <props.icon iSize={{ x: 22, y: 22 }} />
          <Text>{props.text}</Text>
        </IconPair>
        <Dropdown />
      </Dropdowndiv>
      <TextNumber
        value={valid}
        type={"number"}
        onChange={changedInput}
        valid={valid}
      ></TextNumber>
    </CardSelectorLayout>
  );
};
export default CardSelector;
