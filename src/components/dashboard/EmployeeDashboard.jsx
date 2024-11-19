export default function EmployeeDashboard() {

    // get a random color for the task
  const randomColor = () => {
    const colors = [
      "bg-blue-200",
      "bg-green-200",
      "bg-yellow-200",
      "bg-orange-200",
      "bg-purple-200",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };


//   temp task list
  const tasks = [
    { id: 1, name: "Task 1" },
    { id: 2, name: "Task 2" },
    { id: 3, name: "Task 3" },
    { id: 4, name: "Task 4" },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        {/* user greetings / navbar */}
        <div>
          <p className="text-sm">Welcome to your dashboard</p>
          <h1 className="text-3xl font-bold">Username</h1>
        </div>
        <button className=" px-4 py-2 bg-red-500 rounded">Logout</button>
      </div>
      <div>
        {/* summary section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          <div className="bg-green-500 p-4 rounded-lg">
            <p className="text-4xl font-bold">0</p>
            <p className="text-sm">New Tasks</p>
          </div>
          <div className="bg-yellow-500 p-4 rounded-lg">
            <p className="text-4xl font-bold">0</p>
            <p className="text-sm">Completed</p>
          </div>
          <div className="bg-blue-500 p-4 rounded-lg">
            <p className="text-4xl font-bold">0</p>
            <p className="text-sm">Accepted</p>
          </div>
          <div className="bg-red-500 p-4 rounded-lg">
            <p className="text-4xl font-bold">0</p>
            <p className="text-sm">Failed</p>
          </div>
        </div>
      </div>
      <div>
        {/* tasks section */}
        <div className="mt-8">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center justify-between p-4 ${randomColor()} rounded-lg mb-2`}
            >
              <input
                type="checkbox"
                className="mr-4 h-6 w-6 outline-none rounded-full border-2 border-gray-300"
              />
              <span className="flex-1 text-black">{task.name}</span>
              <button className="bg-red-500 px-4 rounded-full h-full">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
