import { useState } from "react";
import { FaClipboard } from "react-icons/fa";

const PasswordGenerator = () => {
    // States
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(8);
    const [uppercase, setUppercase] = useState(false);
    const [lowercase, setLowercase] = useState(false);
    const [number, setNumber] = useState(false);
    const [symbol, setSymbol] = useState(false);

    // Function to generate password
    const generatePassword = (e) => {
        e.preventDefault();

        let characters = '';
        if (uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
        if (number) characters += '0123456789';
        if (symbol) characters += '!@#$%^&*()_+{}:"<>?|[];,./`~';

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            generatedPassword += characters[randomIndex];
        }

        setPassword(generatedPassword);
    };

    // Function to copy password to clipboard
    const copyToClipboard = () => {
        if (password) {
            navigator.clipboard.writeText(password);
            alert('Password copied to clipboard!');
        }
    };

    return (
        <div className="bg-black flex justify-center items-center flex-wrap w-full h-screen text-white">
            <div id="container" className="w-[30rem] bg-gray-800 p-6 text-center rounded-lg shadow-lg">
                <h2 className="text-xl">Your Password</h2>

                <form onSubmit={generatePassword}>
                    <div className="mt-4 flex items-center justify-between">
                        <input
                            type="text"
                            name="password"
                            id="password"
                            readOnly
                            value={password}
                            placeholder="Select some one of the given options"
                            className="w-full px-10 py-2 outline-none bg-gray-700 text-white rounded-lg"
                        />
                        <div
                            className="text-3xl cursor-pointer bg-blue-600 hover:bg-blue-700 py-[0.4rem] px-4 rounded-lg"
                            title="Copy"
                            onClick={copyToClipboard}
                        >
                            <FaClipboard />
                        </div>
                    </div>

                    {/* Length Input */}
                    <div className="field text-white text-xl flex mt-4">
                        <label htmlFor="length" className="bg-slate-900 w-full h-[3rem] flex items-center px-4 text-left">
                            Length
                        </label>
                        <input
                            type="number"
                            name="length"
                            id="length"
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            min={6}
                            max={12}
                            className="text-black text-center outline-none w-[4rem] size-[3rem]"
                            
                        />
                    </div>

                    {/* Uppercase Checkbox */}
                    <div className="field text-white text-xl flex mt-4">
                        <label htmlFor="uppercase" className="bg-slate-900 w-full h-[3rem] flex items-center px-4 text-left">
                            Uppercase
                        </label>
                        <input
                            type="checkbox"
                            id="uppercase"
                            checked={uppercase}
                            onChange={() => setUppercase(!uppercase)}
                             className="size-[3rem]"
                        />
                    </div>

                    {/* Lowercase Checkbox */}
                    <div className="field text-white text-xl flex mt-4">
                        <label htmlFor="lowercase" className="bg-slate-900 w-full h-[3rem] flex items-center px-4 text-left">
                            Lowercase
                        </label>
                        <input
                            type="checkbox"
                            id="lowercase"
                            checked={lowercase}
                            onChange={() => setLowercase(!lowercase)}
                             className="size-[3rem]"
                        />
                    </div>

                    {/* Numbers Checkbox */}
                    <div className="field text-white text-xl flex mt-4">
                        <label htmlFor="numbers" className="bg-slate-900 w-full h-[3rem] flex items-center px-4 text-left">
                            Numbers
                        </label>
                        <input
                            type="checkbox"
                            id="numbers"
                            checked={number}
                            onChange={() => setNumber(!number)}
                             className="size-[3rem]"
                        />
                    </div>

                    {/* Symbols Checkbox */}
                    <div className="field text-white text-xl flex mt-4">
                        <label htmlFor="symbols" className="bg-slate-900 w-full h-[3rem] flex items-center px-4 text-left">
                            Special Symbols
                        </label>
                        <input
                            type="checkbox"
                            id="symbols"
                            checked={symbol}
                            onChange={() => setSymbol(!symbol)}
                            className="size-[3rem]"
                        />
                    </div>

                    <button
                        type="submit"
                        style={{ padding: '10px 30px', fontSize: '20px' }}
                        className="bg-green-500 hover:bg-green-600 rounded-lg mt-10"
                    >
                        Generate Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PasswordGenerator;
