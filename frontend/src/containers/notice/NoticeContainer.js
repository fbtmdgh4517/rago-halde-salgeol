const NoticeContainer = () => {
    return (
        <div className="container shadow w-50 card p-4 rounded-3 mt-3">
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">제목</th>
                        <th scope="col">등록일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href="공지 링크">공지사항1</a>
                        </td>
                        <td>
                            <span>{new Date().toLocaleDateString()}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="공지 링크">공지사항2</a>
                        </td>
                        <td>
                            <span>{new Date().toLocaleDateString()}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="공지 링크">공지사항3</a>
                        </td>
                        <td>
                            <span>{new Date().toLocaleDateString()}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default NoticeContainer;
