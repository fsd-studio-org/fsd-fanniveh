import Hero from '@/app/work/components/Hero';
import { MAXON_INTERNSHIP } from '@/constants/skills';

export const metadata = {
  title: 'Fanni Veh | Maxon Motor Internship',
  description: 'Integrating the MIND predictive maintenance AI pipeline into a deployable ctrlX application at maxon motor.',
};

const sections = [
  {
    heading: "Project Overview",
    content: "Maxon Motor's MIND (Motion Insights and Diagnostics) system is a predictive maintenance platform for electric motors, where the motor itself acts as the sensor by continuously recording operational signals. The goal of this internship was to integrate the existing MIND AI pipeline into a deployable ctrlX application, installable via the ctrlX App Store on the ctrlX CORE industrial controller.",
  },
  {
    heading: "My Part",
    content: "The existing pipeline was refactored from a local Docker and PostgreSQL setup into a snap package compatible with the ctrlX CORE. Key changes included replacing the database with a self-contained SQLite instance, switching the HTTP client to resolve SSL compatibility issues within the snap sandbox, and establishing an efficient incremental build workflow using WSL. Beyond the original scope, a live motor interface was developed consisting of five REST API endpoints that allowed the application to connect to a physical motor, collect training cycles, and run health predictions without externally provided datasets. Bad cycle generation was achieved by programmatically modifying the motor's position proportional gain, enabling fully automated model creation. The application was kept in version parity with the broader MIND development branch throughout.",
  },
  {
    heading: "Improvements",
    content: "This internship was a deliberate step outside of my comfort zone. On a technical level, working with embedded systems, snap packaging, and machine learning pipelines in a real production context built a depth of understanding that classroom projects cannot replicate. Professionally, I grew in autonomy, learned to communicate across teams with different backgrounds, and developed a genuine appreciation for documentation. On a personal level, navigating an international, multilingual work environment and being treated as a full team member from day one gave me confidence in my ability to contribute meaningfully in a professional setting.",
  },
];

export default function Page() {
  return (
    <Hero
      title="Maxon Motor Internship"
      skills={MAXON_INTERNSHIP}
      sections={sections}
    />
  );
}
