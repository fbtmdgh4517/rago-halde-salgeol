import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Routes } from '../node_modules/react-router-dom/dist/index';
import { Helmet } from 'react-helmet-async';
import MainPage from './pages/MainPage';
import NewsListPage from './pages/NewsListPage';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';

function App() {
    return (
        <>
            <Helmet>
                <title>라고 할 때 살걸</title>
            </Helmet>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/write" element={<WritePage />} />
                <Route path="/postList" element={<PostListPage />} />
                <Route path="/news" element={<NewsListPage />} />
                <Route path="/@:username/:postId" element={<PostPage />} />
                <Route path="/calculator" element={<CalculatorPage />} />
                <Route path="/quote" element={<QuotePage />} />
            </Routes>
        </>
    );
}

export default App;
