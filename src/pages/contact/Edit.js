import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const navigate = useNavigate()

    const { id } = useParams()


    useEffect(() => {
        axios.get(`http://localhost:3003/contacts/${id}`)
            .then((res) => {
                setNome(res.data.nome);
                setEmail(res.data.email);
                setTelefone(res.data.telefone);
            });
    }, []);

    const data = {
        nome: nome,
        email: email,
        telefone: telefone,
    };

    function Update(e) {
        e.preventDefault()
        axios.put(`http://localhost:3003/contacts/${id}`, data)
            .then(
                navigate("/")
            )
    }

    return (
        <div className="w-screen h-full flex flex-col justify-center items-center mt-16">

            <h1 className="text-black text-3xl font-semibold font-Montserrat">Editar Contato</h1>

            <form className="w-[80%] h-full flex flex-col justify-center items-center mt-4">
                <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="Nome do contato" className="w-[80%] bg-white/10 text-xl font-Montserrat font-normal py-4 pl-6 outline-none border border-zinc-400 mt-4" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email do contato" className="w-[80%] bg-white/10 text-xl font-Montserrat font-normal py-4 pl-6 outline-none border border-zinc-400 mt-4" />
                <input value={telefone} onChange={(e) => setTelefone(e.target.value)} type="phone" placeholder="Telefone do contato" className="w-[80%] bg-white/10 text-xl font-Montserrat font-normal py-4 pl-6 outline-none border border-zinc-400 mt-4" />

                <button onClick={Update} className="w-[80%] bg-blue-600 text-white text-xl font-Montserrat font-semibold py-4 pl-6 mt-4">Editar Contato</button>
            </form>

        </div>
    )
}

export default Edit;