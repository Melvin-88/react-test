import React from 'react';
import {history} from '../../';
import {Table, TableHead, TH, TR, Empty, Button, theme, invertTheme} from '../../Theme/';

export const ListContract = ({data, removeContact}) => (
    <Table>
        <TableHead>
            <tr>
                <TH>id</TH>
                <TH>Name</TH>
                <TH>Description</TH>
                <TH>Address</TH>
                <TH>Email</TH>
                <TH>History of calls</TH>
                <TH></TH>
            </tr>
        </TableHead>
        <tbody>
        {
            data && data.length ? data.map(e=>(
                <TR key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.description}</td>
                    <td>{e.address}</td>
                    <td>{e.email}</td>
                    <td>{'-'}</td>
                    <td>
                        <Button
                            theme={theme}
                            type="button"
                            onClick={()=> history.push(`/edit-contact/${e.id}`)}
                        >
                            Edit
                        </Button>
                        <Button
                            theme={invertTheme}
                            type="button"
                            onClick={()=>removeContact(e.id)}
                        >
                            Remove
                        </Button>
                    </td>
                </TR>
            )) :
                <tr>
                    <Empty
                        colSpan={7}
                    >
                        No Items...
                    </Empty>
                </tr>
        }
        </tbody>
    </Table>
);