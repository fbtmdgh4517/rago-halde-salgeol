import { Link } from 'react-router-dom';

const PostItemPreview = ({ post }) => {
    const { publishedDate, author, title, _id } = post;
    return (
        <>
            <td className="pt-1">
                <Link className="text-base font-medium rounded-xl p-1" to={`/@${author.username}/${_id}`}>
                    {title.length < 30 ? title : `${title.slice(0, 30)}...`}
                </Link>
            </td>
            {/* <td>
                <span>{author.username}</span>
            </td> */}
            <td className="text-right">
                <span className="text-sm">{new Date(publishedDate).toLocaleDateString()}</span>
            </td>
            {/* <SubInfo username={user.username} publishedDate={new Date(publishedDate)} /> */}
            {/* <Tags tags={tags} />
            <p>{body}</p> */}
        </>
    );
};

export default PostItemPreview;
