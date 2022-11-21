import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HeaderBlock = styled.div`
    position: sticky;
    width: 100%;
    background: white;
    border-bottom: solid 1px rgb(187, 187, 187);
`;

const Wrapper = styled(Responsive)`
    height: 4rem;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    .logo {
        font-size: 1.125rem;
        font-weight: 800;
        letter-spacing: 2px;
        text-decoration: none;
    }
    .right {
        display: flex;
        align-items: center;
    }
`;

const Spacer = styled.div`
    height: 1rem;
`;

const UserInfo = styled.div`
    font-weight: 800;
    margin-right: 1rem;
`;

const Header = ({ user, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navClickHandler = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <header className="border-blue-300 sticky top-0 z-20 flex h-16 items-center border-b bg-white py-5 text-base leading-6 font-semibold">
                <nav className="mx-auto flex w-full max-w-7xl px-4 lg:px-0">
                    <div className="flex w-full items-center justify-between">
                        <div className="flex ">
                            <Link to="/" className="flex items-center text-gray-900">
                                <span className="font-bold">라고 할때 살걸</span>
                            </Link>
                            <div className="ml-3 hidden items-center space-x-7 md:flex lg:ml-[105px] ">
                                <div className="shrink-0">
                                    <Link
                                        onClick={navClickHandler}
                                        className={`text-blue-500 text-base font-medium rounded-xl p-2 transition ease-out hover:bg-blue-500  hover:text-white duration-200`}
                                        to="/postList"
                                    >
                                        <span className="hover:no-underline font-semibold">게시판</span>
                                    </Link>
                                </div>
                                <div className="h-3 w-[1px] bg-gray-400"></div>
                                <div className="shrink-0">
                                    <Link
                                        className="text-blue-500 text-base font-medium rounded-xl p-2 transition ease-out hover:bg-blue-500  hover:text-white duration-200"
                                        to="/calculator"
                                    >
                                        <span className="hover:no-underline font-semibold">계산기</span>
                                    </Link>
                                </div>
                                <div className="h-3 w-[1px] bg-gray-400"></div>
                                <div className="shrink-0">
                                    <Link
                                        className="text-blue-500 text-base font-medium rounded-xl p-2 transition ease-out hover:bg-blue-500  hover:text-white duration-200"
                                        to="/quote"
                                    >
                                        <span className="hover:no-underline font-semibold">시세 조회</span>
                                    </Link>
                                </div>
                                <div className="h-3 w-[1px] bg-gray-400"></div>
                                <div className="shrink-0">
                                    <Link
                                        className="text-blue-500 text-base font-medium rounded-xl p-2 transition ease-out hover:bg-blue-500  hover:text-white duration-200"
                                        to="/news"
                                    >
                                        <span className="hover:no-underline font-semibold">뉴스</span>
                                    </Link>
                                </div>
                                {/* <div className="h-3 w-[1px] bg-gray-400"></div>
                                <div className="shrink-0">
                                    <a
                                        className="text-blue-500 text-base font-medium rounded-xl p-2 transition ease-out hover:bg-blue-500  hover:text-white duration-200"
                                        href="/notice"
                                    >
                                        <span className="hover:no-underline font-semibold">공지사항</span>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {user ? (
                        <div className="hidden items-center md:flex">
                            <div className="text-blue-500 ml-2 hidden h-[35px] w-[85px] items-center justify-center rounded-3xl border border-blue-500 text-center text-base font-medium sm:flex lg:ml-10">
                                {user.username}
                            </div>
                            <button
                                className="ml-2.5 hidden h-[35px] w-[85px] items-center justify-center rounded-3xl bg-blue-500 px-2 py-0.5 text-base font-medium text-white hover:bg-blue-700 sm:flex"
                                onClick={onLogout}
                            >
                                로그아웃
                            </button>
                        </div>
                    ) : (
                        <div className="hidden items-center md:flex">
                            <Link
                                className="text-blue-500 ml-2 hidden h-[35px] w-[85px] items-center justify-center rounded-3xl border border-blue-500 text-center text-base font-medium hover:bg-gray-200 sm:flex lg:ml-10"
                                to="/login"
                            >
                                로그인
                            </Link>
                            <Link
                                className="ml-2.5 hidden h-[35px] w-[85px] items-center justify-center rounded-3xl bg-blue-500 px-2 py-0.5 text-base font-medium text-white hover:bg-blue-700 sm:flex"
                                to="/register"
                            >
                                회원가입
                            </Link>
                        </div>
                    )}
                </nav>
            </header>
            <Spacer />
        </>
    );
};

export default Header;
