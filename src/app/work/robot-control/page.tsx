import Hero from '@/app/work/components/Hero';
import { ROBOT_CONTROL } from '@/constants/skills';

export const metadata = {
  title: 'Fanni Veh | Robot Control Applications',
  description: 'Comparing motor movement methodologies for sorting coloured berries using robot simulation.',
};

const sections = [
  {
    heading: "Project Overview",
    content: "During this project two robot arm control strategies were implemented and compared in simulation: Resolved Rate Motion Control, which uses the Jacobian matrix to follow smooth Cartesian paths in real time, and Joint Space Trajectory Interpolation, which plans trajectories by interpolating between joint angles using 5th-order polynomials. The two methods were evaluated across execution time, path accuracy, and path efficiency over 100 simulated sorting runs, with obstacle avoidance additionally implemented for the Resolved Rate approach using a potential field method.",
  },
  {
    heading: "My Part",
    content: "As I had much less mathematical background than my teammates, I left most of the calculation part up to them. I worked mostly on making the simulations work and documented the whole project.",
  },
  {
    heading: "Improvements",
    content: "The project was not only challenging technically as I had to learn some mathematics, but another big challenge was that our team leader was sometimes quite forceful with his ideas and I had to push back and make sure that we let others have a voice as well.",
  },
];

const documents = [
  {
    href: "/Robotics_Presentation-compressed.pdf",
    type: "down",
    content: "Presentation"
  },
  {
    href: "/main.html",
    type: "link",
    content: "Notebook"
  }
]

export default function Page() {
  return (
    <Hero
      title="Robot Control Applications"
      src="/images/Robotics.png"
      skills={ROBOT_CONTROL}
      sections={sections}
      documentHrefList={documents}
    />
  );
}
