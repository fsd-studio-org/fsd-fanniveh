import Hero from '@/app/work/components/Hero';
import { FSD_STUDIO } from '@/constants/skills';

export const metadata = {
  title: 'Fanni Veh | FSD Studio',
  description: 'Co-founder of FSD Studio, a web design agency.',
};

const sections = [
  {
    heading: "Project Overview",
    content: "FSD Studio is a web design agency established by my partner and me. As an English student, I had been struggling to find a job related to our field. After taking a class about digital startups and hearing from people that they were in need of assistance, we came up with the idea to follow our entrepreneurial dreams and create our own workplace.",
  },
  {
    heading: "My Part",
    content: "As we are only two people with my co-founder, we have to do everything. I have been doing a lot of coding on our page and for our clients, as well as actively trying to find new clients.",
  },
  {
    heading: "Improvements",
    content: "Working in real-life settings is considerably harder than making projects for school. I've learned to be more adaptable and creative because clients don't always know what they want. It's also important to learn and research continuously because clients won't care that they want something we haven't covered in school yet. Overall, it's very challenging and time-consuming but also an invaluable experience.",
  },
];

const documents = [{
  href: "https://www.fsd-studio.com/",
  type: "link",
  content: "Visit our website!"
}]

export default function Page() {
  return (
    <Hero
      title="FSD Studio"
      src="/images/work-card-fsd.png"
      skills={FSD_STUDIO}
      sections={sections}
      documentHrefList={documents}
    />
  );
}
