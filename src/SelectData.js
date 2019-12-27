import React from "react";
import { Select } from "antd";

import options from "./options";
import { appStates } from "./states";

const { Option } = Select;

function SelectData(props) {
  const fetchData = name => {
    if (name !== "") {
      props.setAppState({ state: appStates.LOADING });
      fetch(`${window.location.href}/data/${name}.json`)
        .then(response => response.json())
        .then(data => props.setAppState({ data, state: appStates.READY }))
        .catch(err => props.setFetchState({ state: appStates.ERROR }));
    } else {
      props.setAppState({ state: appStates.NONE_SELECTED });
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
