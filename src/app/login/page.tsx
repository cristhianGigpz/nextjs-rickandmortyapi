export default function Login() {
  return (
    <div className="container mx-auto">
      <main className="flex flex-col items-center min-h-screen p-4">
        <h1 className="text-2xl text-green-600 font-bold">Login Page</h1>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Login
          </button>
        </form>
      </main>
    </div>
  );
}