import useFirebase from '../../hooks/useFirebase';

const LoginForm = () => {
    const { signInWithGoogle } = useFirebase();
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const handleEmail = (e) => {
    //     setEmail(e.target.value)
    // }
    // const handlePassword = (e) => {
    //     setPassword(e.target.value)
    // }
    // const handleLogin = (e) => {
    //     e.preventDefault();
    // }
    return (
        <div className="mt-8">
            <div className="flex flex-col items-center justify-center" method="POST">
                <input type="email" name="email" className="py-3 px-2 w-1/4 border-b-2 border-gray-700 focus:border-green-400 outline-none" placeholder="Email"></input>
                <input type="password" name="password" className="py-3 px-2 w-1/4 border-b-2 border-gray-700 focus:border-green-400 outline-none" placeholder="Password"></input>
                <button className="mt-8 py-3 w-1/4 text-white bg-green-500 hover:bg-green-300 text-g-blue-400 lg">Login</button>
                <p><span className="text-lg font-semibold">Or Sign with </span>
                    <span>
                        <button onClick={signInWithGoogle} className="mt-8 py-2 px-4 rounded-sm text-white bg-blue-500 hover:btext-lg mx-1"><i className="fa fa-google" aria-hidden="true"></i></button>
                        <button className="mt-8 py-2 px-4 rounded-sm text-white bg-blue-500 hover:btext-lg mx-1"><i className="fa fa-facebook" aria-hidden="true"></i></button>
                        <button className="mt-8 py-2 px-4 rounded-sm text-white bg-blue-500 hover:btext-lg mx-1"><i className="fa fa-instagram" aria-hidden="true"></i></button>
                        <button className="mt-8 py-2 px-4 rounded-sm text-white bg-blue-500 hover:btext-lg mx-1"><i className="fa fa-github" aria-hidden="true"></i></button>
                        <button className="mt-8 py-2 px-4 rounded-sm text-white bg-blue-500 hover:btext-lg mx-1"><i className="fa fa-twitter" aria-hidden="true"></i></button>
                    </span>
                </p>
            </div>
            
        </div>
    );
};

export default LoginForm;