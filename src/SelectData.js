import React from "react";
import { Select } from "antd";

import options from "./options";
import { appStates } from "./states";

const { Option } = Select;

function SelectData(props) {
  const [name, setName] = React.useState("");

  const fetchData = newName => {
    props.setFetchState(appStates.LOADING);
    setName(newName);

    if (newName !== name) {
      props.setData(undefined);
    }

    if (newName !== "") {
      fetch(`${window.location.href}/data/${newName}.json`)
        .then(response => response.json())
        .then(data => {
          props.setData(data);
          props.setFetchState(appStates.READY);
        })
        .catch(err => props.setFetchState(appStates.ERROR));
    }
  };

  return (
    <Select
      defaultValue=""
      style={{ width: "100%", marginTop: "0.7rem", whiteSpace: "nowrap" }}
      onChange={fetchData}
    >
      <Option value="" disabled>
        &mdash;
      </Option>
      {options.map(opt => (
        <Option value={opt.value} key={opt.value}>
          {opt.displayName}
        </Option>
      ))}
    </Select>
  );
}

export default SelectData;
