import React from 'react'

const Lakes = (props) => (
  <div>
    <h1>{props.header}</h1>
    <ul>
      {props.lakes.map(lake =>
        <li key={lake.id}>{lake.name} | Trailhead: {lake.trailhead}</li>
      )}
    </ul>
  </div>
)

export default Lakes