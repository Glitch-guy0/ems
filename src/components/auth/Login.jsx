import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="border-2 border-slate-400  shadow shadow-white p-5 rounded-lg flex flex-col w-full max-w-[500px] gap-8">
        <div className="">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-sm text-slate-400">Login to your account</p>
        </div>
        <form
          className="flex flex-col items-center justify-center gap-4 *:w-full text-black"
          onSubmit={(e) => submitHandler(e)}
        >
          <input
            className="border-2 border-gray-300 px-4 py-2 text-xl rounded-lg"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="border-2 border-gray-300 px-4 py-2 text-xl rounded-lg"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-800 py-3 rounded-lg font-semibold text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
