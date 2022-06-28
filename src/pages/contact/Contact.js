import axios from "axios";
import React, { useEffect, useState, } from "react";
import { Link, useParams } from "react-router-dom"

function Contact() {
    const [contact, setContact] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:3003/contacts/${id}`)
        .then((res) => {
          setContact(res.data);
        });
    }, []);

    const {id} = useParams()

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <Link to="/" className="text-white font-semibold px-6 py-2 rounded-xl bg-zinc-400 font-Inter text-2xl mt-8">Voltar</Link>
            {contact && (
            <>
                <div className="w-[700px] h-[200px] justify-center items-center flex px-6 py-4 border border-black mt-16">
                    <div className="w-5/12 flex flex-col space-y-4">
                        <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">Nome</h2>
                        <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">Email</h2>
                        <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">Telefone</h2>
                    </div>
                    <div className="w-7/12 flex flex-col space-y-4">
                        <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">{contact.nome}</h2>
                        <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">{contact.email}</h2>
                        <h2 className="text-black font-semibold font-Inter text-2xl border-b border-black">{contact.telefone}</h2>
                    </div>
                </div>
            </>
            )}
        </div>

    )
}

export default Contact;