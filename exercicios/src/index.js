import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/primeiro'
import BomDia from './componentes/bomDia'
import Multiplos from './componentes/multiplos'
import Saudacao from './componentes/saudacao'
import Pai from './componentes/pai'

const elemento = <h1>ola mundo</h1>

ReactDOM.render(
    <div>
         <Pai nome='Ednilson' sobrenome= 'Ganiko'/>
    </div>   
, document.getElementById('root'))

/*
ReactDOM.render(
    <div>
         <Multiplos.boaTarde nome='Guilherme'/>
         <Multiplos.boaTarde nome='Ligia' />
    </div>   
, document.getElementById('root'))
*/