import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Lakes from './components/lakes'
import { Hello } from './components/hello'
import UsingHooks from './components/using-hooks'
import { UsingEffects, GitHubUser} from './components/using-effects';
import * as serviceWorker from './serviceWorker';
import UsingReducer from './components/using-reducer';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('component')
);

// using tradition JavaScript
ReactDOM.render(
  React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { "style": { "color": "red" } },
      "Hello World"
    )
  ),
  document.getElementById("root")
)

// Render lakes using Babel sytax
const lakeList = [
  { id: 1, name: "Echo Lake", trailhead: "Echo Lake" },
  { id: 2, name: "Maud Lake", trailhead: "Wright's Lake" },
  { id: 3, name: "Cascade Lake", trailhead: "Bayview" }
]
ReactDOM.render(
  <Lakes lakes={lakeList} header="List of Lakes" />,
  document.getElementById("lakes")
)

let city = "Madrid";
ReactDOM.render(
  <h1 className="heading">Hello {city}</h1>,
  document.getElementById("foo")
);

ReactDOM.render(
  <Hello />,
  document.getElementById("bar")
)

ReactDOM.render(
  <Hello library="Something Else" message="Enjoy" />,
  document.getElementById("props")
);

ReactDOM.render(
  <UsingHooks />,
  document.getElementById('using-hooks')
)

ReactDOM.render(
  <UsingEffects />,
  document.getElementById('using-effects')
)

ReactDOM.render(
  <UsingReducer />,
  document.getElementById('using-reducers')
)

ReactDOM.render(
  <GitHubUser login="chickenlipnerd" />,
  document.getElementById('github-user-effect')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
