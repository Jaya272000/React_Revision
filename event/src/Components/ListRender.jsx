import React from 'react'

const ListRender = () => {
    const items=['a','b','c','d']
  return (
    <div>
        {/* This is the way we render item of list on react page */}
        <ul>
            {/* Shorthand method */}
            {
              items.map((i)=><li key={i}>{i}</li>)

            }
            {/* Using return Statement */}
           
        </ul>
    </div>
  )
}

export default ListRender