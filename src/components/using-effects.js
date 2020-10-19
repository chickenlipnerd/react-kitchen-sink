import React, { useState, useEffect } from 'react';

const UsingEffects = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  }, [checked]);

  const [val, setVal] = useState("");
  useEffect(() => {
    console.log(`field 1: ${val}`);
  }, [val]);

  const [val2, setVal2] = useState("");
  useEffect(() => {
    console.log(`field 2: ${val2}`);
  }, [val2]);

  return (
    <div>
      <div>
        <label>
          Favorite Phrase:
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </label>
        <br />
        <label>
          Second Favorite Phrase:
          <input
            value={val2}
            onChange={(e) => setVal2(e.target.value)}
          />
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          value={checked}
          onChange={() => 
            setChecked(checked => !checked)
          }
        />
        {checked ? "checked" : "not checked"}
      </div>
    </div>
  )
}

const GitHubUser = ({login}) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (data) {
    console.log(JSON.stringify(data));
    return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} width={100} />
      </div>
    );
  }
  
  return null;
}

export { UsingEffects, GitHubUser };