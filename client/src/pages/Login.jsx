import { useState } from 'react';
import axios from 'axios';
import FormInput from '../components/FormInput';
import Card from '../components/Card';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: replace with your API URL
      const res = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      // TODO: redirect based on role
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <FormInput label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
      </form>
    </Card>
  );
}
