/* eslint-disable @next/next/no-img-element */
const Projects = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-4">
          <a href="https://github.com/macasnet/ShopCans_FakeStore.git" target="_blank" rel="noopener noreferrer" className="block aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src="images/fakestore.png"
              alt="Project 1"
              className="object-cover w-full h-full"
            />
          </a>
          <h2 className="text-xl font-semibold mb-2 mt-4">FakeStoreAPI kullanarak bir e-commerce Projesi</h2>
          <p className="text-gray-700">REACT</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <a href="https://github.com/macasnet/todo.git" target="_blank" rel="noopener noreferrer" className="block aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src="images/todo.png"
              alt="Project 2"
              className="object-cover w-full h-full"
            />
          </a>
          <h2 className="text-xl font-semibold mb-2 mt-4">Firebase veritabanı kullanarak bir TODO projesi</h2>
          <p className="text-gray-700">REACT</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <a href="https://github.com/macasnet/StokKayit.git" target="_blank" rel="noopener noreferrer" className="block aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src="images/stok.png"
              alt="Project 3"
              className="object-cover w-full h-full"
            />
          </a>
          <h2 className="text-xl font-semibold mb-2 mt-4">Stok kayıt-güncelleme yapabileceğiniz bir Desktop App</h2>
          <p className="text-gray-700">C#</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
