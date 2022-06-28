import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Navbar from './pages/Navbar';
import Contact from "./pages/contact/Contact";
import React from "react";
import NewContatc from "./pages/contact/NewContact";
import Edit from "./pages/contact/Edit";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts/:id" element={<Contact />} />
          <Route path="/novo-contato" element={<NewContatc />} />
          <Route path="/editar-contato/:id" element={<Edit />} />
        </Routes>
      </div>
    );
  }
}

