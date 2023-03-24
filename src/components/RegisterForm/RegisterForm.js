import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.Register_form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.Register_label}>
        Username
        <input
          className={css.Register_label_input}
          type="text"
          name="name"
          placeholder="Enter user name"
        />
      </label>
      <label className={css.Register_label}>
        Email
        <input
          className={css.Register_label_input}
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </label>
      <label className={css.Register_label}>
        Password
        <input
          className={css.Register_label_input}
          type="password"
          name="password"
          placeholder="Enter password"
        />
      </label>
      <button className={css.Register_formBtn} type="submit">
        Register
      </button>
    </form>
  );
};
