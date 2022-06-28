import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";

function NovoContato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const navigate = useNavigate()

    const data = {
        nome: nome,
        email: email,
        telefone: telefone,
    }

    function Submit(e) {
        e.preventDefault();
        axios.post("http://localhost:3003/contacts", data)
            .then()
        navigate('/')

    }


    return (
        <div className="w-screen h-full flex flex-col justify-center items-center mt-16">

            <h1 className="text-black text-3xl font-semibold font-Montserrat">Novo Contato</h1>

            <form className="w-[80%] h-full flex flex-col justify-center items-center mt-4">
                <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="Nome do contato" className="w-[80%] bg-white/10 text-xl font-Montserrat font-normal py-4 pl-6 outline-none border border-zinc-400 mt-4" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email do contato" className="w-[80%] bg-white/10 text-xl font-Montserrat font-normal py-4 pl-6 outline-none border border-zinc-400 mt-4" />
                <input value={telefone} onChange={(e) => setTelefone(e.target.value)} type="phone" placeholder="Telefone do contato" className="w-[80%] bg-white/10 text-xl font-Montserrat font-normal py-4 pl-6 outline-none border border-zinc-400 mt-4" />

                <button onClick={Submit} className="w-[80%] bg-blue-600 text-white text-xl font-Montserrat font-semibold py-4 pl-6 mt-4">Acrescentar Contato</button>
            </form>

        </div>
    )
}

export default NovoContato;