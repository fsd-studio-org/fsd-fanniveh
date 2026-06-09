import Hero from '@/app/work/components/Hero';
import { SKILL_2_2 } from '@/constants/skills';

export const metadata = {
  title: 'Fanni Veh | Skills Integration Lab 2',
  description: 'Building a coordination system for incoming students in SKIL2 Semester 2.',
};

const sections = [
  {
    heading: "Project Overview",
    content: "In this project, my assigned team had to transform documentation into a real-life application for one of our teachers. Her issue was that, as a coordinator, incoming students always find her with their questions and she wanted a system where she can easily coordinate the process, and students can also find answers to all their questions.",
  },
  {
    heading: "My Part",
    content: "I personally took up a leadership role, keeping track of everything, managing Jira, and communicating with teachers when necessary. However, this didn't mean I wasn't doing any programming. I worked on several use cases, including: the system for signing OLAs, managing and viewing guides, and handling programs and students.",
  },
  {
    heading: "Improvements",
    content: "I've always enjoyed working in groups, but this one challenged me as I felt some teammates didn't take it as seriously as I did. I had to learn to be more patient while also standing up for myself and addressing issues when needed. I also continued learning about working with clients, keeping clear communication and managing expectations.",
  },
];

const documents = [
  {
    href: "/ExchangePortal_User_Guide.pdf",
    type: "down",
    content: "User Guide"
  },
]

export default function Page() {
  return (
    <Hero
      title="Skills Integration Lab 2"
      skills={SKILL_2_2}
      sections={sections}
      documentHrefList={documents}
    />
  );
}
