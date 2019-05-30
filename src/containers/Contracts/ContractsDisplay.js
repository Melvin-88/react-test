import React, { PureComponent } from 'react';
import {history} from '../../';
import {Header, ListContract} from '../../components';
import Pagination from "react-js-pagination";
import {Wrapper, Title, Button, theme} from '../../Theme/'

export class ContractsDisplay extends PureComponent {

    state={
        activePage: 1
    };

    handlePageChange = (page) => {
        const {getContactsListAction} = this.props;
        getContactsListAction({page});
    };

    render() {
        const {contacts, removeContactAction} = this.props;
        const {activePage} = this.state;
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
                    data={contacts.data}
                    removeContact={removeContactAction}
                />
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={contacts.totalCount}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                />
            </Wrapper>
        );
    }
}