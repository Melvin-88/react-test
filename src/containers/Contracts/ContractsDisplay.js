import React, { PureComponent } from 'react';
import {history} from '../../';
import {Header, ListContract} from '../../components';
import {Wrapper, Title, Button, theme, Pagination} from '../../Theme/'

export class ContractsDisplay extends PureComponent {

    handlePageChange = (page) => {
        const {getContactsListAction} = this.props;
        getContactsListAction({page});
    };

    render() {
        const {contacts, removeContactAction, activePage} = this.props;
        return (
            <Wrapper>
                <Header
                    left={
                        <Title>Contacts</Title>
                    }
                    right={
                        <Button
                            type="button"
                            theme={theme}
                            onClick={()=>history.push("/add-contact")}
                        >
                            Add Contact
                        </Button>
                    }
                />
                <ListContract
                    data={contacts}
                    removeContact={removeContactAction}
                />
                <Pagination>
                    {activePage !== 1 ?
                        <li><a onClick={() => this.handlePageChange(activePage-1)}>Back</a></li>
                    : null}
                    <li>{activePage}</li>
                    {contacts.length && contacts.length >= 10 ?
                        <li><a onClick={() => this.handlePageChange(activePage+1)}>Next</a></li>
                    : null}
                </Pagination>
            </Wrapper>
        );
    }
}