import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import Authentation from "./layouts/Authentation/index.js";

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Authentation />
      </BrowserRouter>
</React.StrictMode>,
  document.getElementById('root')
);
