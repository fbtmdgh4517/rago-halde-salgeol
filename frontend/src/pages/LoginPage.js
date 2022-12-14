import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

const LoginPage = () => {
    return (
        <AuthTemplate>
            <LoginForm></LoginForm>
        </AuthTemplate>
    );
};

export default LoginPage;
