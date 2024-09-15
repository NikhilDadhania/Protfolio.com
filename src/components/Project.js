import ChevronRightIcon from '@heroicons/react/24/outline/ChevronRightIcon';
import Projectlist from './Projectlist';
import Navbar from './Navbar';
import './Project.css';

const Page = () => {
  return (
    <div className='parentdiv11'>
    <div className='div111'>
    <Navbar/>
    <div className="max-w-[44rem]	mx-auto md: px-8 pb-8">
      <div className='proj'>
      <h1 className="text-3xl mb-4 tracking-tight text-white">Some projects that I’ve built</h1>
        <Projectlist
          title="Cryptoplace"
          description="A platform where you can save & see the volumes , prices of coins."
          logo="/assets/projects/cry.webp"
          link="https://github.com/NikhilDadhania/Cryptoplace"
        />
         <Projectlist
          title="Algo fourOthree"
          description="Algo fourOthree is designed to simplify your journey with algorithms."
          logo="/assets/projects/algo.png"
          link="https://github.com/NikhilDadhania/Algo-fourOthree"
        />
        <Projectlist
          title="LiveDocs"
          description="A platform that provides docs like Google Docs."
          logo="/assets/projects/livedocs.png"
          link="https://github.com/NikhilDadhania/LiveDocs"
        />
         <Projectlist
          title="SpaceGlint"
          description="Space Glint is an interactive platform designed to provide a detailed exploration of our solar system."
          logo="/assets/projects/space.jpeg"
          link="https://github.com/NikhilDadhania/SpaceGlint"
        />
        <a
          href="https://github.com/NikhilDadhania"
          target="_blank"
          rel="noopener noreferrer"
          className="
          inline-flex items-center mt-2 px-2 py-1.5 text-sm font-medium rounded-md 
          transition-colors duration-200 hover:bg-link/10 focus-visible:bg-link/10 text-blue-500"
        >
          View more on GitHub
          <ChevronRightIcon className="inline w-4 h-4 ml-1" strokeWidth={2} />
        </a>
      </div>
      <h1 className="text-3xl mb-4 mt-7 tracking-tight text-white">Skills</h1>
      <div className="flex flex-wrap">
        {[
          'JavaScript',
          'React.js',
          'Next.js',
          'Bootstarp',
          'HTML',
          'CSS',
          'PHP',
          'Python',
          'JAVA',
          'React Native',
          'Git',
          'UI Design',
          'Figma',
          'Canva'
        ].map((skill) => (
          <div key={skill} className="px-4 py-2 rounded-lg text-sm font-semibold border text-white border-gray-3 mr-2 mb-2">
            {skill}
          </div>
        ))}
      </div>

    </div>
    </div>
    </div>
  );
};

export default Page;
