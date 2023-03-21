import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { fetchContacts } from "redux/contacts/operations";
import { ContactForm } from '../components/ContactForm/ContactForm.jsx';
import { ContactList } from '../components/ContactList/ContactList.jsx';
import { Filter } from '../components/Filter/Filter.jsx';
import {getIsLoading } from "redux/contacts/selectors";
import {Loader} from '../components/Loader/Loader.jsx';

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