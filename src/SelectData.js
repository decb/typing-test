import React from "react";

import options from "./options";

function SelectData(props) {
  const [name, setName] = React.useState("");
  const fetchData = event => {
    const newName = event.target.value;
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
    <select value={name} onChange={fetchData}>
      <option value="" key="">
        &mdash;
      </option>
      {options.map(opt => (
        <option value={opt.value} key={opt.value}>
          {opt.displayName}
        </option>
      ))}
    </select>
  );
}

export default SelectData;
