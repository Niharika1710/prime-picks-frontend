export default function ProfilePage() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <div className="bg-white shadow-md rounded-lg p-6 w-[300px]">
        <p className="mb-2">
          <strong>Name:</strong> {user.name}
        </p>

        <p className="mb-4">
          <strong>Email:</strong> {user.email}
        </p>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/";
          }}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}