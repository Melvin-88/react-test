import React, { PureComponent } from 'react';
import {history} from '../../';
import {Header, ListContract} from '../../components';
import {Wrapper, Title, Button, theme, Pagination} from '../../Theme/'

export class ContractsDisplay extends PureComponent {
    state = {
        activePage: 0,
        pageLimit: 10
    };

    handlePageChange = (begin, end, increase) => {
        const {getContactsListAction} = this.props;
        this.setState ((prevState)=>({
            activePage: prevState.activePage + increase
        }), ()=>getContactsListAction({begin, end, increase}));
    };

    renderLinks = () => {
        const cp = this.state.activePage;
        const {pageLimit} = this.state;
        const {contacts= []} = this.props;
        if (cp === 0) {
            return (
                <Pagination>
                    <li>1</li>
                    {contacts.length && contacts.length === pageLimit ?
                        <li><a onClick={() => this.handlePageChange(10, 20, 1)}>Next</a></li>
                    : null}
                </Pagination>
            )
        } else if (cp < this.state.pageLimit - 1) {
            return (
                <Pagination>
                    <li><a onClick={() => this.handlePageChange((cp-1) * 10, (cp * 10), -1)}>Back</a></li>
                    <li>{(cp + 1)}</li>
                    {contacts.length && contacts.length === pageLimit ?
                        <li><a onClick={() => this.handlePageChange((cp+1) * 10, (cp+2) * 10, 1)}>Next</a></li>
                        : null}
                </Pagination>
            )
        } else {
            return (
                <Pagination>
                    <li><a onClick={() => this.handlePageChange((cp-1) * 10, cp * 10, -1)}>Back</a></li>
                    <li>{(cp-1)}</li>
                </Pagination>
            )
        }
    };

    render() {
        const {contacts, removeContactAction} = this.props;
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
                {this.renderLinks()}
            </Wrapper>
        );
    }
}