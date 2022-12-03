import { Link } from 'react-router-dom';

const AuthTemplate = (props) => {
    return (
        <div className="absolute bg-blue-200 flex flex-col justify-center items-center left-0 top-0 bottom-0 right-0">
            <div className="border border-blue-200 w-[480px] mx-auto rounded-xl shadow-md mb-9 p-8 bg-white">
                <div className="text-center font-bold pb-8 tracking-[.25rem]">
                    <Link to="/">라고 할때 살껄</Link>
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default AuthTemplate;
