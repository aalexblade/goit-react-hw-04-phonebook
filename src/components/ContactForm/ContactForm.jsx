import PropTypes from "prop-types";

import {
    Form,
    Label,
    FormInput,
    Button,
} from "./ContactForm.styled";

import { useState } from "react";

export const ContactForm =({ onSubmit }) => { 
   
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
  
  const handleChange = e => {
    const { value, name } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };
  
 const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit({ name, number });

    reset();
  };
    
    const reset = () => {
    setName('');
    setNumber('');
  };   
          
    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                Name
                <FormInput
                    onChange={handleChange}
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
                    onChange={handleChange}
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
    
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};