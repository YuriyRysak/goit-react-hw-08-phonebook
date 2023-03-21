import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import './App.module.css';
import { getError, getIsLoading } from "redux/selectors";
import {Loader} from './Loader/Loader';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
 

 
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
 
    <section>
      <h1>Phonebook</h1>
      <ContactForm />      
      <h2>Contacts</h2>
      <Filter/>
      {isLoading && !error && <Loader/>}
      <ContactList/>
    </section>
  );
};

 
  
  
