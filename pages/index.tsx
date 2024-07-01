// pages/index.tsx

import Layout from '../components/Layout';
import Image from 'next/image';

const Home: React.FC = () => {
  return (

      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Sol tarafta resim */}
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image src="/images/homeimg.png" alt="Profile" className="rounded-lg shadow-lg w-full h-auto" width={600} height={400} />
            </div>
            
            {/* Sağ tarafta metin */}
            <div className="md:w-1/2 md:ml-8 text-center md:text-left">
              <div className="text-orange-600 text-7xl md:text-6xl font-bold mb-4">Hello! - I am Can</div>
              <div className="font-bold text-lg md:text-2xl mb-4">A Front-End Developer Based in Ankara</div>
              {/* Animasyonlu metin için özel tasarım eklenebilir */}
              <div className="text-base md:text-lg text-gray-600">
                {/* Buraya ek açıklamalar veya detaylar eklenebilir */}
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Home;
