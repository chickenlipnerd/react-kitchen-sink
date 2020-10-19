import React, { useState } from 'react';

////  Can't use hooks in a class they must be in the body of a function
// class UsingHooks extends React.Component {
//   render() {
//     const [status] = useState("Open");
//     return (
//       <div>
//         <h1>Status</h1>
//       </div>
//     )
//   }
// }

const UsingHooks = () => {
  const [year, setYear] = useState(2050);
  const [manager, setManager] = useState("Alex");
  const [status, setStatus] = useState("Open");
  return (
    <div>
      <div>
        <h1>{year}</h1>
        <button onClick={() => setYear(year+1)}>
          New Year
        </button>
      </div>
      <div>
        <h1>Manager on Duty: {manager}</h1>
        <button onClick={() => setManager("Rachel")}>
          New Manager
      </button>
      </div>
      <div>
        <h1>Status: {status}</h1>
        <button onClick={() => setStatus("Open")}>
          Open
      </button>
        <button onClick={() => setStatus("Back in 5")}>
          Break
      </button>
        <button onClick={() => setStatus("Closed")}>
          Closed
      </button>
      </div>
    </div>
  )
}

export default UsingHooks;