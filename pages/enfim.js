import React, { Component, useEffect } from 'react';

function Enfim() {
    useEffect(() => {
        window.location.href = "https://discord.gg/yc9qtFc";
        }, []);

    return (
        <div>
            <h1>Hola, vai ser redirecionado dentro de momentos.</h1>
        </div>
    );
}

export default Enfim;