import TimetableRow from '@/app/components/TimeTableRow';
import Layout from '@/components/layout/Layout';
import FSDImage from '@/components/template/ui/FSDImage';
import LinkWrapper from '@/components/template/ui/LinkWrapper';
import Section from '@/components/template/ui/Section';
import { Title } from '@/components/ui/Title';

// Every page.jsx file should export a metadata variable.
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-object

export const metadata = {
  title: 'Dr Somogyi Krisztina',
  description: 'Veszprémi fogorvos 1995 óta, konzerváló kezelésekkel, fogpótlásokkal és gyermekfogászattal.',
};

const timetable = {
  "Hétfő": "10-16",
  "Kedd": "8-14",
  "Szerda": "14-19",
  "Péntek": "8-14"
}

function page() {
  return (
    <Layout>
      <Section innerClassName='h-svh' outerClassName='!h-screen !py-0 bg-orange-50'>
        <div className='flex mt-88 gap-20 justify-content-between'>
          <div className='w-[75%] h-70 bg-orange-700 relative rounded-t-[800px] rounded-[100px]'>
            <FSDImage className='rotate-y-180 absolute bottom-0 w-[70%] left-14' src='/images/Fanni-hero copy.png'></FSDImage>
          </div>

          <div className='w-[75%] ms-0 -mt-30'>
            <h1 className='text-7xl mb-6 font-primary-regular'>
              <span className='-ms-20 block'>Machine</span><span className='italic'>Learning</span>
            </h1>
            <p className='f leading-7.5'>I am an Applied Computer Science student at BFH in Switzerland, specializing in <span className='p-1 px-2 text-[#7450c2] font-black h-fit bg-purple-100 rounded-xl'>AI and Data Science</span>. While my core focus is building intelligent systems using Python and TensorFlow , my background running a web development agency, FSD Studio, gives me a unique edge. I don't just train models—I understand <span className='p-1 px-2 text-[#4c8eb1] font-black h-fit bg-cyan-100 rounded-xl'>full-stack deployment</span>, business logic, and how to turn analytical groundwork into practical, user-facing solutions.</p>
            {/* <div className='flex gap-2'>
              <div className='p-4 h-fit bg-[#B490FF] rounded-4xl'>
                <p className='text-3xl font-primary'>Data Science</p>
              </div>
              <div className='p-4 h-fit bg-[#62BDEF] rounded-4xl'>
                <p className='text-3xl font-primary'>Data Science</p>
              </div>
              <div className='p-4 h-fit bg-[#D1F878] rounded-4xl'>
                <p className='text-3xl font-primary'>Data Science</p>
              </div>  
            </div> */}
          </div>
        </div>
      </Section>

      <Section id='Rólam' outerClassName='bg-blue-50/80' innerClassName='flex flex-col gap-4 mx-auto'>
        <div className='md:max-w-[80%] flex flex-col gap-4 md:gap-6 mx-auto'>
          <Title>Szakértelem és gondoskodás 1995 óta</Title>
          <p className='text-cyan-950'>
            1995-ben végeztem a SOTE Fogorvostudományi Karán.
            Szakvizsgám megszerzése óta Veszprémben dolgozom.
            Konzerváló fogászati problémákkal, fogpótlásokkal, gyermekfogászati kérdésekkel, alapszintű parodontológiai kezelésekkel kereshetnek pácienseim.
            Új munkahelyemen is szájsebész és fogszabályozó kollega segít a problémák teljeskörű ellátásában a legkorszerűbb radiológiai háttérrel.
            Fogtechnikus csapatunk pedig felkészült a XXI. század kihívásaira.
            Szeretettel várom pácienseimet március 16-tól a Promedicum Fogászatban.
          </p>
        </div>
      </Section>

      <Section id='Időpontok' innerClassName='flex flex-col gap-4'>

        <div className='md:max-w-[80%] w-full flex flex-col gap-4 md:gap-6 mx-auto'>
          <Title>Rendelési időm:</Title>
          <div className='my-auto w-full flex flex-col gap-4 md:gap-6 mx-auto'>
            <div className='my-auto w-full grid grid-cols-2 lg:grid-cols-4 gap-4 mx-auto'>
              {Object.entries(timetable).map(([key, value], index) => (
                <TimetableRow key={index} value={value} label={key} />
              ))}
            </div>

          </div>
        </div>
      </Section>

      <Section id='Kapcsolat' outerClassName='bg-blue-50/80' innerClassName='flex flex-col gap-4'>
        <div className='my-auto w-full flex flex-col gap-4 md:gap-6 md:max-w-[80%] mx-auto'>
          <Title>Időpontfoglalás</Title>
          <p>
            Időpontfoglalás lehetséges a
            <LinkWrapper link={"tel:+3688444644"} > +3688444644</LinkWrapper>,
            illetve <LinkWrapper link={"tel:+36309463145"} >+36309463145</LinkWrapper> telefonszámon,
            a <LinkWrapper link={"https://promedicum.hu/idopontfoglalas"} >Promedicum honlapján</LinkWrapper> keresztül
            vagy személyesen a Nárcisz utca 2-ben.
          </p>
        </div>
      </Section>
    </Layout>
  );
}

export default page;
