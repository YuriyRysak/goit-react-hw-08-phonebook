import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { getIsLoading } from 'redux/contacts/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import css from 'pages/Contacts/Comtarts.module.css';
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
}
