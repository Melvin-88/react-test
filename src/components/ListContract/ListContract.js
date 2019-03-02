import React from 'react';

export const ListContract = ({data}) => (
    <ul>
        {
            data && data.length ? data.map(e=>(
                <li key={e.id}>{e.name}</li>
            )) :
                <li>No Items...</li>
        }
    </ul>
);