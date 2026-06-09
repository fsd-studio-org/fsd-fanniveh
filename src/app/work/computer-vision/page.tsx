import Hero from '@/app/work/components/Hero';
import { COMPUTER_VISION } from '@/constants/skills';

export const metadata = {
  title: 'Fanni Veh | Computer Vision',
  description: 'Training a U-Net model for person detection using the Cityscapes dataset.',
};

const sections = [
  {
    heading: "Project Overview",
    content: "The goal of our project was to train a model to detect people in pictures. For this we used the Cityscape dataset of street view images from Kaggle. To achieve the goal, my team created a U-Net model with 34 functional layers.",
  },
  {
    heading: "My Part",
    content: "By this time, I was comfortable taking the leadership position in school projects. My team consisted of 3 people including me, and the other 2 members were quite passive, so it was a challenge to engage them and make sure that we delivered quality results. I did most of the coding, as I had the most experience with training AI models.",
  },
  {
    heading: "Improvements",
    content: "The biggest issue in my team was a slight language barrier. Both my teammates had a much lower English knowledge than what I am used to, so it took a lot of time just to make sure that we understood each other. Despite this, the project ended up being one of my best scoring courses with a grade of 5.4.",
  },
];

const documents = [
  {
    href: "/Computer_Vision_Presentation.pdf",
    type: "down",
    content: "Presentation"
  },
]

export default function Page() {
  return (
    <Hero
      title="Computer Vision"
      skills={COMPUTER_VISION}
      sections={sections}
      documentHrefList={documents}
    />
  );
}
