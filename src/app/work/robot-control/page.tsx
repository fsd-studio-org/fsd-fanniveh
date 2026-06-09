import Hero from '@/app/work/components/Hero';
import { ROBOT_CONTROL } from '@/constants/skills';

export const metadata = {
  title: 'Fanni Veh | Robot Control Applications',
  description: 'Comparing motor movement methodologies for sorting coloured berries using robot simulation.',
};

const sections = [
  {
    heading: "Project Overview",
    content: "During this project we were comparing two different motor movement methodologies while sorting coloured berries into the corresponding boxes. As an addition, we also tried the sorting task while having an obstacle in the way of our robot.",
  },
  {
    heading: "My Part",
    content: "As I had much less mathematical background than my teammates, I left most of the calculation part up to them. I worked mostly on making the simulations work and documented the whole project.",
  },
  {
    heading: "Improvements",
    content: "I improved my mathematical skills a lot, as well as my communication skills. The biggest challenge was that our team leader was sometimes quite forceful with his ideas and I had to push back and make sure that we let others have a voice as well.",
  },
];

const documents = [
  {
    href: "/Robotics_Presentation.pdf",
    type: "down",
    content: "Presentation"
  },
  {
    href: "/main.html",
    type: "down",
    content: "Notebook"
  }
]

export default function Page() {
  return (
    <Hero
      title="Robot Control Applications"
      skills={ROBOT_CONTROL}
      sections={sections}
      documentHrefList={documents}
    />
  );
}
