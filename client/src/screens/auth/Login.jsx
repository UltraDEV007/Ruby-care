import { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CurrentUserContext } from "../../CurrentUser/CurrentUserContext"
import { loginUser } from '../../services/auth'

export default function Login() {
  const history = useHistory()

  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  }

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleLogin(formData);
    }}>
      <h3>Login</h3>
      <label>Email:
        <input
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Password:
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <Link to='/register'>Register</Link>
      <button>Submit</button>
    </form>
  )
}
