import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsItem from './Components/NewsItem';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ChatBot from './Components/ChatBot';



export default class App extends Component {
  
  render() {
    {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
    return (


      <Router>


      <Navbar/>
      <ChatBot/>
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize = {4} category = {"general"}/>}></Route>
            <Route exact path="/sports" element={<News key="sports"  pageSize = {4} category = {"sports"}/>}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize = {4} category = {"entertainment"}/>}></Route>
            <Route exact path="/health" element={<News key="health" pageSize = {4} category = {"health"}/>}></Route>
            <Route exact path="/business" element={<News key="business" pageSize = {4} category = {"business"}/>}></Route>
            <Route exact path="/technology" element={<News key="technology" pageSize = {4} category = {"technology"}/>}></Route>
            <Route exact  path="/science" element={<News key="science" pageSize = {4} category = {"science"}/>}></Route>
            <Route exact  path="/chat" element={<ChatBot key="chat" pageSize = {4} category = {"science"}/>}></Route>
          </Routes>
      </Router>
      
      
      
    )
  }
}

