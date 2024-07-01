// pages/blog/front-end-developer.tsx
import React from 'react';



const FrontEndDeveloperPage = () => {
  return (

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Front-end Developer Kimdir?</h1>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Front-end Developer Nedir?</h2>
          <p className="text-gray-700">
            {"Front-end developer, kullanıcıların doğrudan etkileşimde bulunduğu web siteleri ve uygulamaların ön yüzünü frontend geliştiren yazılım geliştiricisidir. Kullanıcı arayüzü UI tasarımını kodlamakla görevlidir."}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Ne İş Yapar?</h2>
          <p className="text-gray-700">
            {"Front-end developerlar, HTML, CSS ve JavaScript kullanarak web sitelerinin ve uygulamalarının kullanıcı arayüzlerini oluşturur ve geliştirirler. Kullanıcı deneyimini UX iyileştirmek için interaktif öğeler ekler, web uygulamalarını mobil cihazlara uygun hale getirirler."}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Hangi Yazılım Dillerini ve Yetkinlikleri Bilmelidir?</h2>
          <p className="text-gray-700">
            {"Front-end developerlar, HTML, CSS ve JavaScript temel bilgilerine sahip olmalıdır. Ayrıca, modern JavaScript çerçeveleri ve kütüphaneleri React, Vue.js, Angular gibi hakkında bilgi sahibi olmaları önemlidir. Responsive design, CSS preprocessors örneğin, Sass veya Less ve version control sistemleri Git gibi konularında yetkin olmaları beklenir."}
          </p>
        </div>
      </div>

  );
};

export default FrontEndDeveloperPage;
