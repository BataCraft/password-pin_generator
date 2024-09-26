import { useState } from "react";
import { FaClipboard } from "react-icons/fa";

const Otp = () => {
    const [passcode, setPasscode] = useState("");
     

    const generatePasscode = ()=>{
        const newpasscode = Math.floor(1000 + Math.random() * 9999);
        setPasscode(newpasscode.toString());
    }

    const copyToClipboard = () => {
      if (passcode) {
          navigator.clipboard.writeText(passcode);
          alert('Password copied to clipboard!');
      }
  };
  return (
    <div className="w-full h-screen flex  justify-center items-center  bg-black text-white">
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Your Passcode/PIN</h2>

     <div className="flex items-center justify-center">
        <div style={{ fontSize: '24px', marginBottom: '20px', fontWeight: 'bold' }} className="bg px-4 py-2 flex">
          {passcode ? passcode : 'Click to generate Passcode'}
        </div>
          <div className="text-3xl cursor-pointer " title="Copy" onClick={copyToClipboard}> <FaClipboard /></div>
        
     </div>

      <button onClick={generatePasscode} style={{ padding: '10px 20px', fontSize: '20px' }} className="bg-green-500 hover:bg-green-600 rounded-lg">
        Generate Passcord/PIN
      </button>
    </div>

    </div>
  )
}

export default Otp