import { motion } from 'framer-motion';
import { IconClockPlay } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';

export const Experience = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My proffesional career journey';
  // mockup experience data
  const experiences = [
    {
      id: 1,
      image: '/vite.svg',
      name: 'Jadin Pratama',
      position: 'Programmer',
      startDate: 'Oct 2023',
      endDate: 'Present',
      duration: '-',
      location: 'Jakarta',
    },
    {
      id: 2,
      image: '/vite.svg',
      name: 'Parkland World Indonesia',
      position: 'Digitalization Staff',
      startDate: 'Jan 2023',
      endDate: 'Oct 2023',
      duration: '10 Months',
      location: 'Serang',
    },
    {
      id: 2,
      image: '/vite.svg',
      name: 'Matahari Department Store',
      position: 'IT Support',
      startDate: 'Nov 2021',
      endDate: 'Dec 2022',
      duration: '1 Years, 2 Months',
      location: 'Serang',
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
        icon={<IconClockPlay />}
        label="Experience"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((experience) => (
          <CommonCard key={experience.id} {...experience} />
        ))}
      </div>
    </motion.section>
  );
};
