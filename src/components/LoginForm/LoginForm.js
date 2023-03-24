import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.Login_form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.Login_label}>
        Email
        <input
          className={css.Login_label_input}
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </label>
      <label className={css.Login_label}>
        Password
        <input
          className={css.Login_label_input}
          type="password"
          name="password"
          placeholder="Enter password"
        />
      </label>

      <button className={css.Login_formBtn} type="submit">
        Log In
      </button>
      <div></div>
    </form>
  );
};

