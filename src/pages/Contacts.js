import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { fetchContacts } from "redux/contacts/operations";
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {getIsLoading } from "redux/contacts/selectors";
import {Loader} from './Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  
 

 
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return ( 
    <section>
       <Helmet>
      <title>Phonebook</title>
      </Helmet>
      <ContactForm /> 
      <div>{isLoading && <Loader/>}</div>     
      <Filter/>
      <ContactList/>
    </section>
  );
};