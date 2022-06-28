import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function Home() {
  const [contacts, setContacts] = useState([]);

    const loadContacts = () => {
      axios.get("http://localhost:3003/contacts")
      .then((res) => {
        setContacts(res.data);
      });
    };
    useEffect(() => {
      loadContacts()
  }, []);

  function Delete(id){
    axios.delete(`http://localhost:3003/contacts/${id}`)
    .then(
      loadContacts()
    )
  }

  return (
    <div className="w-full h-full flex flex-col px-10 py-8">


      <div className="w-full flex flex-col min-h-[50vh] justify-center items-center">
        <h1 className="text-black text-3xl font-semibold font-Montserrat">
          Contatos
        </h1>
        <table className="w-[95%] text-center overflow-hidden overflow-y-scroll mt-8">
          {/* border border-black */}
          <thead className="border-b bg-blue-600">
            <tr>
              <th scope="col" className="text-md font-semibold text-white px-6 py-4">#</th>
              <th scope="col" className="text-md font-semibold text-white px-6 py-4">Nome</th>
              <th scope="col" className="text-md font-semibold text-white px-6 py-4">Email</th>
              <th scope="col" className="text-md font-semibold text-white px-6 py-4">Telefone</th>
              <th scope="col" className="text-md font-semibold text-white px-6 py-4">Ação</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((data, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">{index + 1}</td>
                <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">{data.nome}</td>
                <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">{data.email}</td>
                <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">{data.telefone}</td>
                <td className="flex justify-center items-center space-x-4 mt-1">
                  <Link to={`/contacts/${data.id}`} className="px-6 py-2 text-white font-normal bg-gray-600 rounded-lg">Contato</Link>
                  <Link to={`/editar-contato/${data.id}`}  className="px-6 py-2 text-white font-normal bg-blue-400 rounded-lg">Editar</Link>
                  <button onClick={() => Delete(data.id)} className="px-6 py-2 text-white font-normal bg-red-600 rounded-lg">Apagar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;