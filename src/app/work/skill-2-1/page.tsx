import Hero from '@/app/work/components/Hero';

export const metadata = {
  title: 'Fanni Veh | SKIL2 — Session Coordination',
  description: 'Documentation project for a real-life client in SKIL2.',
};

const skills = ["Figma", "Jira"];

const sections = [
  {
    heading: "Project Overview",
    content: "In the first semester of SKIL2, we received an interesting assignment. We had to create documentation with a real-life client based on their requirements. This client needed a system that would help her coordinate a school assignment called training session, where students have to find a client and deliver a lesson to people.",
  },
  {
    heading: "My Part",
    content: "This was the first course where I stepped up as the team leader. I supported others and ensured everything was completed on time. We had to create extensive documentation, where I developed most of the use case diagram, several use case descriptions, and multiple pages in the Figma prototype.",
  },
  {
    heading: "Improvements",
    content: "As everyone in my team was quite reserved, as a leader, I had to learn how to motivate them to brainstorm and share their ideas more openly. Moreover, we had to experience a whole new situation with the client meetings, which for me as a shy person was frightening at first. However, I was able to overcome my feelings and by the end it was very enjoyable.",
  },
];

const documents = [
  {
    href: "/SMO-A_Analysis_and_design_report.pdf",
    type: "down",
    content: "Report"
  },
]

export default function Page() {
  return (
    <Hero
      title="SKIL2 — Session Coordination"
      skills={skills}
      sections={sections}
      documentHrefList={documents}
    />
  );
}
