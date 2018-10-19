import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import Route from './Route'


ReactDOM.render(<BrowserRouter><Route /></BrowserRouter>, document.getElementById('root'));
