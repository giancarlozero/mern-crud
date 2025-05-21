import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState(0);

    const [error, setError] = useState("");

    const { id } = useParams();

    const navigate = useNavigate();

    const getSingleUser = async () => {
        const response = await fetch(`http://localhost:3000/${id}`);

        const result = await response.json();

        if (!response.ok) {
            console.log(result.error);
            setError(result.error);
        }

        if (response.ok) {
            setError("");
            setNome(result.nome);
            setEmail(result.email);
            setIdade(result.idade);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const usuarioEditado = { nome, email, idade };

        const response = await fetch(`http://localhost:3000/${id}`, {
            method: "PATCH",
            body: JSON.stringify(usuarioEditado),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();

        if (!response.ok) {
            console.log(result.error);
            setError(result.error);
        }

        if (response.ok) {
            setError("");
            navigate("/all");
        }
    }

    useEffect(() => {
        getSingleUser();
    }, []);

    return (
        <div>
            {error && <div className="alert alert-danger">
                {error}
            </div>}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input type="text" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Idade</label>
                    <input type="text" className="form-control" value={idade} onChange={(e) => setIdade(e.target.value)} />
                </div>

                <button className="btn btn-primary" type="submit">Atualizar</button>
            </form>
        </div>
    );
}

export default Update;