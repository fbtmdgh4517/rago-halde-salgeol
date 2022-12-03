import { Link } from 'react-router-dom';

const PostItemPreview = ({ post }) => {
    const { publishedDate, author, title, _id } = post;
    return (
        <>
            <td className="pt-1">
                <Link className="text-base rounded-xl p-1" to={`/@${author.username}/${_id}`}>
                    {title.length < 25 ? title : `${title.slice(0, 25)}...`}
                </Link>
            </td>
            <td className="text-right">
                <span className="text-sm">{new Date(publishedDate).toLocaleDateString()}</span>
            </td>
        </>
    );
};

export default PostItemPreview;
