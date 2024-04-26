import { motion } from 'framer-motion';
import { IconBallpen } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';

export const Education = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My education history';
  // mockup education data
  const educations = [
    {
      id: 1,
      image: '/vite.svg',
      name: 'Universitas Muhammadiyah Banten',
      position: 'Bachelor Engineering',
      startDate: 'Nov 2018',
      endDate: 'Nov 2022',
      duration: '4 years',
      location: 'Tangerang',
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconBallpen />}
        label="Education"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {educations.map((education) => (
          <CommonCard key={education.id} {...education} />
        ))}
      </div>
    </motion.section>
  );
};
