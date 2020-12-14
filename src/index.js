import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pdata from './Pdata';

const posts = (val) => {
  return (
    <App
      proPic={val.proPic}
      proLink={val.proLink}
      name={val.name}
      post={val.post}
    />
  )
}

ReactDOM.render(
  <React.StrictMode>
    {Pdata.map(posts)}
  </React.StrictMode>,
  document.getElementById('root')
);
