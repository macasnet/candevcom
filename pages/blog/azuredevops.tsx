// pages/blog/azure-devops.tsx

export default function AzureDevOpsPage() {
  return (

      <div className="max-w-3xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Azure DevOps Nedir?</h1>
        <p className="text-gray-700 mb-4">
          Azure DevOps, Microsoft'un sunduğu bir bulut tabanlı hizmettir ve yazılım geliştirme süreçlerini
          yönetmek için kullanılır. Bu hizmet, yazılım projelerinin planlanmasını (planlama), kod
          yazımını (kod), derlenmesini ve test edilmesini (build ve test), dağıtımını (release) ve
          izlenmesini (monitoring) sağlayan araçları ve süreçleri içerir.
        </p>
        <p className="text-gray-700 mb-4">
          Azure DevOps, yazılım geliştirme sürecinin tüm aşamalarını kapsayan bir dizi entegre
          araç sunar. Bu araçlar, ekip üyelerinin işbirliği yapmasını, proje ilerlemesini izlemesini
          ve süreçlerin otomatikleştirilmesini sağlar.
        </p>
        <p className="text-gray-700 mb-4">
          Azure DevOps'un temel özellikleri şunlardır:
          <ul className="list-disc list-inside">
            <li>Proje yönetimi ve takibi</li>
            <li>Code repository (kod depolama)</li>
            <li>Otomatik build ve test işlemleri</li>
            <li>Continuous Integration (CI) ve Continuous Deployment (CD)</li>
            <li>İşbirliği ve iletişim araçları</li>
            <li>Raporlama ve izleme</li>
          </ul>
        </p>
        <p className="text-gray-700">
          Azure DevOps, modern yazılım geliştirme süreçlerini destekleyerek, ekiplerin daha hızlı
          ve verimli bir şekilde yazılım geliştirme yapmasına olanak tanır.
        </p>
      </div>

  );
}
