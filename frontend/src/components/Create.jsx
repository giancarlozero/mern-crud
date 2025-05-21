import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState(0);

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const adicionarUsuario = { nome, email, idade };

        const response = await fetch('http://localhost:3000', {
            method: "POST",
            body: JSON.stringify(adicionarUsuario),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();

        if(!response.ok) {
            console.log(result.error);
            setError(result.error);
        }

        if(response.ok) {
            console.log(result.error);
            setError("");
            setNome("");
            setEmail("");
            setIdade(0);
            navigate("/all")
        }
    };

    return (
        <div className="container">
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit} className="form-container">
                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input type="text" className="form-control" name="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Idade</label>
                    <input type="number" className="form-control" name="Idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
};

export default Create;