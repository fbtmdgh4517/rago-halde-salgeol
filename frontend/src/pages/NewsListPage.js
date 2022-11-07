import HeaderContainer from '../containers/common/HeaderContainer';
import NewsListContainer from '../containers/news/NewsListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

const NewsListPage = () => {
    return (
        <>
            <HeaderContainer />
            <NewsListContainer />
            <PaginationContainer />
        </>
    );
};

export default NewsListPage;
