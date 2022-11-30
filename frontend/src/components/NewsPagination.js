const NewsPagination = ({ total, limit, page, setPage }) => {
    const numPages = Math.ceil(total / limit);

    return (
        <nav className="flex justify-center items-center gap-1 m-4">
            <button
                className="border-none rounded-lg p-2 m-0 bg-blue-500 text-white"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >
                &lt;
            </button>
            {Array(numPages)
                .fill()
                .map((_, i) => (
                    <button
                        className="border-none rounded-lg p-2 m-0 bg-blue-500 text-white"
                        key={i + 1}
                        onClick={() => setPage(i + 1)}
                        aria-current={page === i + 1 ? 'page' : null}
                    >
                        {i + 1}
                    </button>
                ))}
            <button
                className="border-none rounded-lg p-2 m-0 bg-blue-500 text-white"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >
                &gt;
            </button>
        </nav>
    );
};

export default NewsPagination;
