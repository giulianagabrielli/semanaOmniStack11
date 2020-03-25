import React from 'react';

export default function Header(props){
    return(
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

//export default Header; --> essa exportação pode ir para o começo da função
