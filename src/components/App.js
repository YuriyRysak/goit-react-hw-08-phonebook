// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "redux/operations";
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import './App.module.css';
// import { getError, getIsLoading } from "redux/selectors";
// import {Loader} from './Loader/Loader';


// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);
 

 
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
 
//     <section>
//       <h1>Phonebook</h1>
//       <ContactForm />      
//       <h2>Contacts</h2>
//       <Filter/>
//       {isLoading && !error && <Loader/>}
//       <ContactList/>
//     </section>
//   );
// };

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader/>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

  
  
