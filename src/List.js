import React from 'react'
import Card from './Card';
import { robots } from './robots';

const List = () => {

    const cardComponent = robots.map((user, i) => {
        return <Card name={robots[i].name} email={robots[i].email} id={robots[i].id}/>
    })

    return (
        <div>
            {cardComponent};
        </div>
    )
}

export default List