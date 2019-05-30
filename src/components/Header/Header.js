import React from 'react';
import {Head} from '../../Theme/'

export const Header = ({left, right}) => (
    <Head>
        <div>{left}</div>
        <div>{right}</div>
    </Head>
);