import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-16 bg-blue-600 flex items-center px-10 py-2 justify-between">
      <Link to="/">
      <h1 className="text-white text-3xl font-semibold font-Montserrat">Agenda de contatos</h1>
      </Link>

      <Link to="/novo-contato" className="w-48 bg-white text-blue-400 flex justify-center items-center font-semibold text-xl h-12 rounded-lg">Novo Contato</Link>
    </div>
  );
}

export default Navbar;