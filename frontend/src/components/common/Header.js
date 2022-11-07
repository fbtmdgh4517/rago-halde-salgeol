import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';

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
    return (
        <>
            <header className="border-blue-400 sticky top-0 z-20 flex h-16 items-center border-b-[0.5px] bg-white py-5 text-base font-medium leading-6">
                <nav className="mx-auto flex w-full max-w-7xl px-4 lg:px-0">
                    <div className="flex w-full items-center justify-between">
                        <div className="flex ">
                            <a href="/" className="flex items-center text-gray-900">
                                <span className="">라고 할때 살걸</span>
                            </a>
                            <div className="ml-3 hidden items-center space-x-7 md:flex lg:ml-[105px]">
                                <div className="shrink-0">
                                    <a
                                        className="text-blue-600 text-base font-medium rounded-xl p-2 transition ease-out hover:bg-blue-500  hover:text-white duration-200"
                                        href="/postList"
                                    >
                                        <span className="hover:no-underline">게시판</span>
                                    </a>
                                </div>
                                <div className="h-3 w-[1px] bg-gray-400"></div>
                                <div className="shrink-0">
                                    <a
                                        className="text-blue-600 text-base font-medium rounded-xl p-2 transition ease-out hover:bg-blue-500  hover:text-white duration-200"
                                        href="/calculator"
                                    >
                                        <span className="hover:no-underline">계산기</span>
                                    </a>
                                </div>
                                <div className="h-3 w-[1px] bg-gray-400"></div>
                                <div className="shrink-0">
                                    <a
                                        className="text-blue-600 text-base font-medium rounded-xl p-2 transition ease-out hover:bg-blue-500  hover:text-white duration-200"
                                        href="/quote"
                                    >
                                        <span className="hover:no-underline">시세 조회</span>
                                    </a>
                                </div>
                                <div className="h-3 w-[1px] bg-gray-400"></div>
                                <div className="shrink-0">
                                    <a
                                        className="text-blue-600 text-base font-medium rounded-xl p-2 transition ease-out hover:bg-blue-500  hover:text-white duration-200"
                                        href="/news"
                                    >
                                        <span className="hover:no-underline">뉴스</span>
                                    </a>
                                </div>
                                <div className="h-3 w-[1px] bg-gray-400"></div>
                                <div className="shrink-0">
                                    <a
                                        className="text-blue-600 text-base font-medium rounded-xl p-2 transition ease-out hover:bg-blue-500  hover:text-white duration-200"
                                        href="/notice"
                                    >
                                        <span className="hover:no-underline">공지사항</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {user ? (
                        <div className="hidden items-center md:flex">
                            <Link
                                to="/mypage"
                                className="ml-2 hidden h-[35px] w-[85px] items-center justify-center rounded-3xl border border-blue-500 text-center text-base font-medium hover:bg-gray-200 sm:flex lg:ml-10"
                            >
                                {user.username}
                            </Link>
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
                                className="ml-2 hidden h-[35px] w-[85px] items-center justify-center rounded-3xl border border-blue-500 text-center text-base font-medium hover:bg-gray-200 sm:flex lg:ml-10"
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
