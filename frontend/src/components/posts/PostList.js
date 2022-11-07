import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Link } from 'react-router-dom';

const PostListBlock = styled(Responsive)`
    margin-top: 1rem;
`;

const WritePostButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    &:first-child {
        padding-top: 0;
    }
    & + & {
        border-top: 1px solid ${palette.gray[2]};
    }
    h2 {
        font-size: 2rem;
        margin-bottom: 0;
        margin-top: 0;
        &:hover {
            color: ${palette.gray[6]};
        }
    }
    p {
        margin-top: 2rem;
    }
`;

const PostItem = ({ post }) => {
    const { publishedDate, author, tags, title, body, _id } = post;
    return (
        <PostItemBlock>
            <h2>
                <Link to={`/@${author.username}/${_id}`}>{title}</Link>
            </h2>
            <SubInfo username={author.username} publishedDate={new Date(publishedDate)} />
            <Tags tags={tags} />
            <p>{body}</p>
        </PostItemBlock>
    );
    // const { publishedDate, author, title, _id } = post;
    // return (
    //     <>
    //         <td>
    //             <Link
    //                 className="text-base font-medium rounded-xl p-1 transition ease-in-out hover:bg-blue-500  hover:text-white duration-200"
    //                 to={`/@${author.username}/${_id}`}
    //             >
    //                 {title}
    //             </Link>
    //         </td>
    //         <td>
    //             <span>{author.username}</span>
    //         </td>
    //         <td>
    //             <span>{new Date(publishedDate).toLocaleDateString()}</span>
    //         </td>
    //         {/* <SubInfo username={user.username} publishedDate={new Date(publishedDate)} /> */}
    //         {/* <Tags tags={tags} />
    //         <p>{body}</p> */}
    //     </>
    // );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
    if (error) {
        return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
    }
    return (
        <PostListBlock>
            <WritePostButtonWrapper>
                {showWriteButton && (
                    <Button cyan to="/write">
                        새 글 작성하기
                    </Button>
                )}
            </WritePostButtonWrapper>
            {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
            {!loading && posts && (
                <div>
                    {posts.map((post) => (
                        <PostItem post={post} key={post._id} />
                    ))}
                </div>
            )}
        </PostListBlock>
    );
    // return (
    //     <div className="border border-blue-600 max-w-5xl container mx-auto rounded-xl shadow-md p-4 my-4">
    //         <WritePostButtonWrapper>
    //             {showWriteButton && (
    //                 <Button cyan to="/write">
    //                     새 글 작성하기
    //                 </Button>
    //             )}
    //         </WritePostButtonWrapper>
    //         <table className="table-auto w-full">
    //             <thead>
    //                 <tr>
    //                     <th scope="col">제목</th>
    //                     <th scope="col">아이디</th>
    //                     <th scope="col">등록일</th>
    //                 </tr>
    //             </thead>
    //             <tbody className="text-center">
    //                 {!loading && posts && (
    //                     <>
    //                         {posts.map((post) => (
    //                             <tr>
    //                                 <PostItem post={post} key={post._id} />
    //                             </tr>
    //                         ))}
    //                     </>
    //                 )}
    //             </tbody>
    //         </table>
    //     </div>
    // );
};

export default PostList;