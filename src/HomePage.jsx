import {  NavLink } from "react-router-dom";



const HomePage = () => {
    return (
        <div className="w-full h-full">
            <div className="w-screen h-screen flex justify-center items-center bg-black flex-wrap text-white gap-2 md:gap-4 lg:gap-8 text-2xl">

                {/* Password Generator Section */}
                <div className="bg-green-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-green-600 transition duration-300 ">
                   <NavLink to= '/PasswordGenerator'> 
                   
                   Password Generator
                   
                   </NavLink>
                </div>

                {/* OTP Section */}
                <div className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300">
                    <NavLink to='/passcode' >
                        PassCode Generator
                    </NavLink>
                </div>

            </div>
        </div>
    );
};

export default HomePage;
