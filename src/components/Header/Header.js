import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Header = ({title}) => (
    <Head>
        <Title>{title}</Title>
        <Link to={'/'}>Home</Link>
    </Head>
);

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Head = styled.header`
  margin: 25px 0;
  padding: 0 10px;
`;