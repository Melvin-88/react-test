import React from 'react';

export const ListCustomers = ({data, getCurrentContracts, removeCustomer}) => (
    <ul>
        {
            data && data.length ? data.map(e=>(
                <li key={e.id}>
                    {e.name}
                    <hr/>
                    {getCurrentContracts(e.id)}
                    <button
                        type="button"
                        onClick={()=>removeCustomer(e.id)}
                    >
                        delete
                    </button>
                </li>
            )) :
                <li>No Items...</li>
        }
    </ul>
);