import { IconLeaf } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SectionMotion } from '../common/motion/Section';

export const About = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'A short story of me';
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconLeaf />}
        label="About"
        description={sectionDescription}
      />
      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Hello, i'm Yusron</h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>
      <p>
        Allow me to introduce myself, my name is Muhammad Yusron, currently working as a programmer at PT Jadin Pratama starting October 2023, a company engaged in EDC Himbara and BCA machine technician services. Here I make improvements and improvements to the technician tracking application. I am very proud of my contribution to improving operational efficiency and improving user experience through the use of the latest technology. The thing that challenges me the most is that I apply SOLID and Clean Code principles to existing code, so that it is easy to read and maintain. Apart from that, I also developed a chat report feature to make it easier to track job orders using Node JS. The dominant tools used here are PHP Native as the main programming language, the CodeIgniter framework, Gitlab as version control and MySQL for the main database. The new feature I created is the Rest Api infrastructure using PHP and NodeJs to handle receiving technician work from BCA and exchanging work data between vendors and back to BCA. The Rest Api infrastructure was created using standard Bank Indonesia authorization rules, where there are rules for sending a key and there are other formulas for generating confidential access tokens.
      </p>
      <p>
        Apart from that, I also have valuable experience in the digitalization team at PT Parkland World Indonesia from January 2023 to October 2023, where I contributed significantly in accelerating the company's digital transformation. My ability to collaborate with diverse stakeholders and design innovative solutions has been an added value to my team. The feature that was created together with the team is QC automation report, where the report which was previously unsequential and unrelated, using automation report becomes easier when the data is needed. Then carry out development in the matketing department whose functionality is to integrate data with buyers, namely Adidas, where the purpose of data integration is to find out the number of orders received. Next, improve and fix bugs in existing applications. The tools used are Laravel version 9, native PHP as the main language, Sql Server and VueJs frontend. Here I learned a lot about clean code, how code is easy to read and easy to repair by following a clean code book, which contains rules for coding. Then this is where I first became acquainted with the SOLID principle, which made me feel enthusiastic about working. This team also applies Agile and Scrum development methods to get maximum results and always be in unity of thought, so it doesn't get stretched and focuses on achieving the work time target. The valuable experience that I gained when using the Scrum and Agile methods is that I can divide or breakdown a large job into small jobs so that not much time is wasted, so I can determine that even before the deadline arrives, I will successfully complete the project. Then the application paradigm that was implemented when I was at Parkland was a microservice concept, where we separated the backend and frontend. Beckend uses Laravel which only returns json and performs logic and DB connections, then the frontend consumes json from beckend using VueJS Axios and pinia as state management.
      </p>
      <p>
        One of my biggest achievements was when I was involved in developing an ERP system using the PHP programming language, at PT Matahari Department Store from November 2021 to December 2022, at that time my position was IT Support. This project not only tested my technical skills, but also expanded my understanding of best practices in enterprise resource management. This experience enriched my background in understanding business needs and implementing appropriate technology solutions. When I joined this project, the feature I developed was email automation for finance with the function of blasting invoice emails to suppliers. The tools used are PHP Version 7 programming language, Codeigniter Framework, MySql database, OraclesQL Plus and native JavaScript. When I worked at Matahari Department Store, I also had experience at OraclePlus to create department operations reports.
      </p>
    </motion.section>
  );
};
