import * as React from 'react';

// import components
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout pageTitle="Boynton Beach, FL">
    <div className="w-full h-screen">
      <div className="max-w-screen-md mx-auto px-8 flex flex-col justify-center h-full">
          <h1 className="mb-8 text-lg md:text-2xl font-normal tracking-wider uppercase">Herzlichen Wilkommen</h1>
          <p className="mb-8">
          “Minh Quang Asia” ist ein kleines, aber uriges Restaurant, das asiatische Küche anbietet. Die Speisekarte umfasst eine breite Auswahl an Gerichten aus verschiedenen Ländern Asiens, von der chinesischen Küche bis hin zur thailändischen und japanischen Küche. 
          </p>
          <p>
          Besonders hervorzuheben sind die frischen Zutaten und die authentischen Aromen, die in jedem Gericht zu finden sind. Das Restaurant hat eine ungezwungene und entspannte Atmosphäre und bietet sowohl einen hervorragenden Service als auch günstige Preise.
          </p>
          <p>Ein Besuch in unserem Restaurant ist ein echtes Vergnügen für alle Sinne.</p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
