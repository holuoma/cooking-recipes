import React from 'react'

const Posts=({recipes})=>{

    return(<div>
        {recipes && recipes.map(recipe=>{
            return <p>Hallo</p>
        })
        }
    </div>) 
    
}


export default Posts

