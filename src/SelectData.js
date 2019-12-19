import React from "react";
import { Select } from "antd";

import options from "./options";

const { Option } = Select;

function SelectData(props) {
  const [name, setName] = React.useState("");

  const fetchData = newName => {
    setName(newName);

    if (newName !== name) {
      props.setData(undefined);
    }

    if (newName !== "") {
      fetch(`/data/${newName}.json`)
        .then(response => response.json())
        .then(data => props.setData(data))
        .catch(err => console.log(err));
    }
  };

  return (
    <Select
      defaultValue=""
      style={{ width: "100%", marginTop: "1.2rem" }}
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
