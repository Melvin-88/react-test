import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export class Home extends Component {
    render() {
        return (
            <Wrapper className='home-page'>
                <Title>The Contracts Automation Platform</Title>
                <List>
                    <Item>
                        <Link to="/contracts">Contracts</Link>
                    </Item>
                    <Item>
                        <Link to="/customers">Customers</Link>
                    </Item>
                </List>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Item = styled.li`
  margin: 0 10px;
`;
