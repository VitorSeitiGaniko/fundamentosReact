import React from 'react'
import Filho from './filho'

export default props => 
    <div>
        <h1> Pai:  {props.nome} {props.sobrenome} </h1>
        <h2>Filhos</h2>
        <ul>
            <Filho nome = 'Pedro' sobrenome = {props.sobrenome} />
            <Filho { ...props } />
            <Filho {... props} nome='carla' />
        </ul>
    </div>

    /**/