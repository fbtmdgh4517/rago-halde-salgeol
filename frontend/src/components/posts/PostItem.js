import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
    const { publishedDate, author, title, _id } = post;
    return (
        <>
            <td>
                <Link
                    className="text-base font-medium rounded-xl p-1 transition ease-in-out hover:bg-blue-500  hover:text-white duration-200"
                    to={`/@${author.username}/${_id}`}
                >
                    {title}
                </Link>
            </td>
            <td>
                <span>{author.username}</span>
            </td>
            <td>
                <span>{new Date(publishedDate).toLocaleDateString()}</span>
            </td>
            {/* <SubInfo username={user.username} publishedDate={new Date(publishedDate)} /> */}
            {/* <Tags tags={tags} />
            <p>{body}</p> */}
        </>
    );
};

export default PostItem;
