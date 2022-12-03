import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import { useState } from 'react';

const PostListBlock = styled(Responsive)`
    margin-top: 1rem;
`;

const PostItem = ({ post }) => {
    const { publishedDate, author, tags, title, body, _id } = post;
    return (
        <li className="py-4 ">
            <div className="flex flex-col">
                <div className="flex shrink-0 items-center gap-x-1">
                    <Link
                        className="truncate pl-1 text-sm font-normal text-gray-700 hover:text-blue-500 sm:text-sm"
                        to={`/@${author.username}`}
                    >
                        {author.username}
                    </Link>
                    <div className="h-3 w-[1px] bg-gray-400 mx-1"></div>
                    <span className="text-sm text-gray-700 sm:text:sm">
                        {new Date(publishedDate).toLocaleDateString()}
                    </span>
                </div>
                <div className="my-2">
                    <Link
                        className="truncate pl-1 text-sm font-semibold leading-6 hover:text-blue-500 sm:text-base"
                        to={`/@${author.username}/${_id}`}
                    >
                        {title}
                    </Link>
                </div>
            </div>
        </li>
    );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
    const [page, setPage] = useState(1);
    const offset = (page - 1) * 10;

    const pageChangeHandler = (page) => {
        setPage(page);
    };

    if (error) {
        return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
    }

    return (
        <div className="mt-4 max-w-5xl mx-auto">
            <div className="">
                {showWriteButton && (
                    <Link
                        className="h-9 items-center space-x-1 rounded-md bg-blue-500 py-2 px-3 text-white shadow-md hover:bg-blue-400"
                        to="/write"
                    >
                        글 작성하기
                    </Link>
                )}
            </div>
            {!loading && posts && (
                <div>
                    <ul className="divide-y divide-blue-300">
                        {posts.slice(offset, offset + 10).map((post) => (
                            <PostItem post={post} key={post._id} />
                        ))}
                    </ul>
                </div>
            )}
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
        </div>
    );
};

export default PostList;
