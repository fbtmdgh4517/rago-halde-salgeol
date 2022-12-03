// import Pagination from '../../components/posts/Pagination';
import { useState } from 'react';
import Pagination from 'react-js-pagination';
import { useSelector } from 'react-redux';

const PaginationContainer = () => {
    // const [searchParams] = useSearchParams();

    // const { username } = useParams();
    // const tag = searchParams.get('tag');
    // const page = parseInt(searchParams.get('page'), 10) || 1;

    const [page, setPage] = useState(1);

    const pageChangeHandler = (page) => {
        setPage(page);
    };

    const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
        lastPage: posts.lastPage,
        posts: posts.posts,
        loading: loading['posts/LIST_POSTS'],
    }));

    if (!posts || loading) return null;

    return (
        <div className="mx-auto items-center flex justify-center">
            <Pagination
                innerClass="inline-flex items-center -space-x-px"
                itemClassFirst="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                itemClassLast="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                itemClass="px-3 py-2 leading-tight bg-white border border-gray-300"
                activeClass="z-10 px-3 py-2 leading-tight text-white border border-blue-300 bg-blue-500"
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={posts && posts.length}
                pageRangeDisplayed={5}
                prevPageText={'<'}
                nextPageText={'>'}
                onChange={pageChangeHandler}
            />
        </div>
    );
};

export default PaginationContainer;
