const Projects = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src="https://via.placeholder.com/300"
              alt="Project 1"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2 mt-4">Project 1</h2>
          <p className="text-gray-700">This is a description of project 1.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src="https://via.placeholder.com/300"
              alt="Project 2"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2 mt-4">Project 2</h2>
          <p className="text-gray-700">This is a description of project 2.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src="https://via.placeholder.com/300"
              alt="Project 3"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2 mt-4">Project 3</h2>
          <p className="text-gray-700">This is a description of project 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
