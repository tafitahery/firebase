import { useState } from 'react';
import './login.scss';

export default function Login() {
  const [error, setError] = useState(false);

  return (
    <div className="login">
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Login</button>
        {error && <span>Error email or password!</span>}
      </form>
    </div>
  );
}
