import { useState } from 'react'

function Button() {

    const [likes, setLikes] = useState(0)

    function handleClick() {

        setLikes(likes + 1)
    }
        
                 
    return <button onClick={handleClick}>Like: {likes}</button>
}

function Header({title}) {
    
    return (
        <h1>
          {title ? title : 'Default Title!'}
        </h1>
    );
}

function List() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

    const nameList = names.map((name) => (<li key={name}>{name}</li>)) 
    
    return (
        <ul>
            {nameList}
        </ul>
            
    )
}

export default function HomePage() {
    
        
        return (
        <div>
          <Header title="React 💙" />     
          <List /> 
          <Button />    
        </div>
        );
}
