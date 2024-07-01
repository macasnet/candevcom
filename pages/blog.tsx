// pages/blog.tsx
import Link from 'next/link';


const Blog = () => {
  return (

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Blog</h1>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
          <Link href="/blog/front-end-developer">
            Front-end Developer Kimdir?
          </Link>

          </h2>
          <p className="text-gray-700">
            Front-end developer, kullanıcıların doğrudan etkileşimde bulunduğu web siteleri ve uygulamaların ön yüzünü (frontend) geliştiren yazılım geliştiricisidir. Kullanıcı arayüzü (UI) tasarımını kodlamakla görevlidir.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
          <Link href="/blog/azuredevops">
            Azure DevOps
          </Link>

          </h2>
          <p className="text-gray-700">
          Azure DevOps, Microsoft`un sağladığı bir dizi araç, hizmet ve yazılım geliştirme süreçleri için bir platformdur. İşte Azure DevOps`un temel işlevleri:
          </p>
        </div>


        {/* Diğer blog içerikleri buraya eklenebilir */}

      </div>

  );
};

export default Blog;
