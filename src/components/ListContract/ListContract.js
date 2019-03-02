import React from 'react';
import styled from 'styled-components';

export const ListContract = ({data}) => (
    <List>
        {
            data && data.length ? data.map(e=>(
                <Item key={e.id}>{e.name}</Item>
            )) :
                <Empty>No Items...</Empty>
        }
    </List>
);

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Item = styled.li`
    margin: 10px;
    padding: 10px;
    width: 135px;
    text-align: center;
    border: 1px solid #cccccc;
`;

const Empty = styled.li`
    margin: 10px;
`;