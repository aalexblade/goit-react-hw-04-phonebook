import PropTypes from "prop-types";

import {
    Form,
    Label,
    FormInput,
    Button,
} from "./ContactForm.styled";

import { Component } from "react";

export class ContactForm extends Component { 
   
   state = {
    name: '',
    number: '',
    };
    
    // handleChangeName = event => {
    //     this.setState({ name:event.target.value });
    // }

    // handleChangeNumber = event => {
    //     this.setState({ number: event.target.value });
    // }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    };

    handleSubmit = event => {
        event.preventDefault();
        // this.setState({ name: '', number: '' });
        this.props.onSubmit(this.state);
        this.reset();
    };
    
     reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
   
    render() { 
        const { name, number  } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Label>
                    Name
                    <FormInput
                        onChange={this.handleChange}
                        value={name}
                        name="name"
                        type="text"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required />
                </Label>
                 <Label>
                        Number
                    <FormInput
                        onChange={this.handleChange}
                        value={number}
                        name="number"
                        type="tel"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required />
                    </Label>
                    <Button type="submit">
                        Add contact
                    </Button>
                </Form>
        )
    };
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};