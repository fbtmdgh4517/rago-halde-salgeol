const NewsListPreview = () => {
    //게시판 미리보기랑 뉴스 미리보기를 따로 놔야되나 아니면 같이 놓고 네비게이션을 고를수 있게 해야되나
    return (
        <div className="border border-blue-600 drop-shadow-md max-w-5xl container mx-auto rounded-xl shadow-md p-4 m-4">
            <h4 className="pb-4 text-xl font-semibold">뉴스</h4>
            <table className="table-auto w-full">
                <tbody>
                    <tr>
                        <td className="">
                            <a className="" href="해당 뉴스 링크">
                                뉴스
                            </a>
                        </td>
                        <td className="text-right">
                            <span>2022/22/22</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default NewsListPreview;
