
import LoginForm from 'components/LoginForm/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';



export default function Login() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Sign in</title>
        </Helmet>
        <LoginForm />
      </div>
    </HelmetProvider>
  );
}
