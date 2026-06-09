import About from '@/app/components/about/About';
import Hero from '@/app/components/hero/Hero';
import Work from '@/app/components/work/Work';

// Every page.jsx file should export a metadata variable.
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-object

export const metadata = {
  title: 'Dr Somogyi Krisztina',
  description: 'Veszprémi fogorvos 1995 óta, konzerváló kezelésekkel, fogpótlásokkal és gyermekfogászattal.',
};

function page() {
  return (
    <>
      <Hero />

      <Work />

      <About />
    </>
  );
}

export default page;
