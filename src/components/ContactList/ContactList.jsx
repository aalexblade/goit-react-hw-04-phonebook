import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import {
    Item,
    Wrapper,
    Button,
} from "./ContactList.styled";

export const ContactList = ({ contacts, onClick }) => {
   
  return (
    <Wrapper>
      {contacts.map(contact => {
        return (
          <Item key={nanoid()}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <Button
              type="button"
              onClick={() => {
                onClick(contact.id);
              }}
            >
              Delete
            </Button>
          </Item>
        );
      })}
    </Wrapper>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};