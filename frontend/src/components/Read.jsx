import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Read = () => {
    const [data, setData] = useState("");
    const [error, setError] = useState("");

    async function getData() {
        const response = await fetch("http://localhost:3000");

        const result = await response.json();

        if (!response.ok) {
            console.log(result.error);
            setError(result.error);
        }

        if (response.ok) {
            setData(result);
        }
    }

    const handleDelete = async (id) => {
        const response = await fetch("http://localhost:3000", {
            method: "DELETE"
        });

        const result = await response.json();

        if (!response.ok) {
            console.log(result.error);
            setError(result.error);
        }

        if (response.ok) {
            setError("Excluído com sucesso");

            setTimeout(() => {
                setError("");
                getData();
            }, 2000);
        }
    }

    useEffect(() =>{
        getData();
    }, []);

    console.log(data);

    return (
        <div>
            {error && <div className="alert alert-danger">
                {error}
            </div>}

            <div className="row">
                {Array.isArray(data) && data.length > 0 ? (data.map((ele) => (
                    <div key={ele._id} className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="card text-center">
                            <div className="card-body">
                                <h1 className="card-title">{ele.nome}</h1>
                                <h2 className="card-subtitle mb-2 text-muted">Idade: {ele.idade} anos</h2>
                                <p className="text-muted">Email: {ele.email}</p>
                                <a className="card-link" onClick={() => handleDelete(ele._id)} href="#">Deletar</a>
                                <Link to={`/${ele._id}`} className="card-link">Editar</Link>

                            </div>
                        </div>
                    </div>
                ))
            ):(
                <div>Não há dados disponíveis</div>
            )}
            </div>
        </div>
    );
};

export default Read;