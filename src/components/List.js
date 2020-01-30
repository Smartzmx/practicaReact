import React, {useState} from 'react' // import (para importar modulos) nombre de como se refiere a ese modulo (React) from (de) el nombre del modulo y se pone entre ' ' (react), estoy importando de manera especifica el modulo useState
    
export const List = (props) => {
// useState es un método que permite actualiza ante cualquier cambio el valor de la lista y solo se corre al inicio y una sola vez, regresa un array con el valor actual como primer parametro y regresa una función setLista
    const [lista, setLista] = useState([])

    const handleAdd = () => {
        if (value === '') {
            return
        }
        setLista([...lista, { value, checked: false }])
        setValue ('')
    }

    const [value, setValue] = useState('')

    const handleChange = (e) => {
       setValue(e.target.value) // el método target, identifica el elemento y toma la propiedad value
    }

    const handleRemove = (index) => {
        setLista([
            ...lista.slice(0, index),
            ...lista.slice(index+1)
        ])
    }

    const handleCheck = (index) => {
        setLista([
            ...lista.slice(0, index),
            {...lista[index], checked: true},
            ...lista.slice(index+1)
        ])
    }
    // el nombre del archivo es igual nombre de la constante
    
    return ( // para que funcione se utiliza un parentesis para englobar el código JSX
        <div style={{textAlign:"center"}} >
            <h1>To Do App</h1>
            <input  value ={value} onChange = {handleChange} />
            <button onClick={handleAdd}>Add Item</button>
            <div>
                <ul>
                    {lista.map((el, index) => (
                        <li style={{backgroundColor: el.checked ? 'green' : 'white'}} key={el.value}> <button style={{color:'green'}} onClick={() => handleCheck(index)}>Done</button>{el.value} {''}<button style={{color:'red'}} onClick={() => handleRemove(index)}>X</button></li> // el key es para colocar un id de cada elemento debido a que esta regresando multiples nodos
                    ))}
                </ul>
            </div>
        </div>
    )
}
