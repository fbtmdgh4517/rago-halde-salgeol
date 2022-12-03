import { Link } from 'react-router-dom';
import styled from 'styled-components';

const textMap = {
    login: '로그인',
    register: '회원가입',
};

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 1rem;
    margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
    const text = textMap[type];
    return (
        <div>
            <h3 className="font-semibold mb-4">{text}</h3>
            <form onSubmit={onSubmit}>
                <div class="relative z-0 mb-6 w-full group">
                    <input
                        type=""
                        id="floating_id"
                        class="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        onChange={onChange}
                        autoComplete="username"
                        name="username"
                        value={form.username}
                    />
                    <label
                        for="floating_id"
                        class="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        아이디
                    </label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input
                        type="password"
                        id="floating_password"
                        class="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        onChange={onChange}
                        autoComplete="new-password"
                        name="password"
                        value={form.password}
                    />
                    <label
                        for="floating_password"
                        class="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        비밀번호
                    </label>
                </div>
                {type === 'register' && (
                    <div class="relative z-0 mb-6 w-full group">
                        <input
                            type="password"
                            id="floating_repeat_password"
                            class="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                            onChange={onChange}
                            autoComplete="new-password"
                            name="passwordConfirm"
                            value={form.passwordConfirm}
                        />
                        <label
                            for="floating_repeat_password"
                            class="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            비밀번호 확인
                        </label>
                    </div>
                )}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <button class="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {text}
                </button>
            </form>
            <div className="mt-8 text-right">
                {type === 'login' ? (
                    <Link to="/register" className="text-gray-500 hover:text-blue-500 font-semibold">
                        회원가입
                    </Link>
                ) : (
                    <Link to="/login" className="text-gray-500 hover:text-blue-500 font-semibold">
                        로그인
                    </Link>
                )}
            </div>
        </div>
    );
};

export default AuthForm;
