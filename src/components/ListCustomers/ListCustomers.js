import React from 'react';
import styled from 'styled-components';

export const ListCustomers = ({data, contracts, removeCustomer}) => (
    <List className="list-customer">
        {
            data && data.length ? data.map(e=>(
                <Item key={e.id}>
                    <Title>{e.name}</Title>
                    <div>{getCurrentContracts(e.id, contracts)}</div>
                    <Button
                        type="button"
                        onClick={()=>removeCustomer(e.id)}
                    >
                        Delete
                    </Button>
                </Item>
            )) :
                <Empty>No Items...</Empty>
        }
    </List>
);

const getCurrentContracts = (customerId, contracts) => {
    if(!contracts) return <div>No Contracts</div>;
    //Check on contracts for current customer
    let currentContractsList = contracts.filter((e)=> e.customerId === customerId);
    if(!currentContractsList.length) return <div>No Contracts for current customer</div>;
    //return list contracts
    return currentContractsList.map(e=>(
        <div key={e.id} className="contract-item">{e.name}</div>
    ))
};

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Item = styled.li`
    margin: 10px;
    padding: 10px;
    width: 170px;
    text-align: center;
    border: 1px solid #cccccc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Title = styled.span`
      display: block;
      font-size: 25px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
      margin-bottom: 10px;
      &+div{
        flex-grow: 1;
        margin-bottom: 10px;
      }
`;

const Empty = styled.li`
    margin: 10px;
`;

const Button = styled.button`
        display: inline-block;
        font-size: 14px;
        line-height: 1;
        padding: 10px 20px;
        border-radius: 15px;
        text-decoration: none;
        background: #012a79;
        border: 1px solid #012a79;
        color: #fff;
        &:hover{
            background: #fff;
            color: #012a79;
            textDecoration: none;
            cursor: pointer;
        }
`;