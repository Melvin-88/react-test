import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {required, email} from '../../validate';
import {renderField, renderFieldTextArea} from '../../helpers/formFields/formFields';
import {Title, Button, BtnRow, theme, FormWrapper, Flex} from '../../Theme/';

export class AddContactDisplay extends PureComponent {

    SubmitForm = data => {
        const {saveContactAction, editContactAction, id} = this.props;
        return new Promise((resolve, reject) => {
            if(id){
                editContactAction({
                    data,
                    id,
                    resolve,
                    reject,
                });
            }else{
                saveContactAction({
                    data,
                    resolve,
                    reject,
                });
            }
        }).catch(error => {
            throw new SubmissionError({
                ...error,
            });
        });
    };

    render() {
        const {handleSubmit, submitting, error, pristine, currentItem, id} = this.props;
        if(id && (!currentItem || (currentItem && !currentItem.name))) return 'Loading..';
        return (
            <FormWrapper>
                <Flex>
                    <Title>{currentItem ? `Edit ${currentItem.name}` : 'Add Contact'}</Title>
                    <Link to="/">Home</Link>
                </Flex>
                <form
                    onSubmit={handleSubmit(this.SubmitForm)}
                    className="form_auth"
                >
                    <Field
                        name="name"
                        type="text"
                        component={renderField}
                        label="Name"
                        validate={[required]}
                    />
                    <Field
                        name="address"
                        type="text"
                        component={renderField}
                        label="Address"
                        validate={[required]}
                    />
                    <Field
                        name="email"
                        type="email"
                        component={renderField}
                        label="Email"
                        validate={[required, email]}
                    />
                    <Field
                        name="date_call"
                        type="text"
                        component={renderField}
                        label="Date Call"
                        validate={[required]}
                    />
                    <Field
                        name="description"
                        type="text"
                        component={renderFieldTextArea}
                        label="Description"
                    />
                    <BtnRow>
                        <Button
                            theme={theme}
                            type="submit"
                            disabled={submitting || pristine}
                            className="btn btn-blue"
                        >
                            {currentItem ? `Edit Contact` : 'Add Contact'}
                        </Button>
                    </BtnRow>
                </form>
                {error ? <p>{error}</p> : null}
            </FormWrapper>
        );
    }
}

AddContactDisplay = reduxForm({
    form: 'AddContactDisplay',
    enableReinitialize: true
})(AddContactDisplay);
