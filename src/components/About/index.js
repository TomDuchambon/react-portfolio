import { faAngular, faCss3, faHtml5, faJs, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)
}, [])

  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I am a Full Stack Developer with a background in the hospitality
          industry. I am passionate about creating beautiful and functional
          websites and applications. I am a self-taught developer who is
          constantly learning and improving my skills. I am currently looking for
          a position as a Junior Developer.
        </p>
        <p>
          I am a graduate of Le Wagon Coding Bootcamp. I have also completed
          courses on Udemy and Codecademy. I am currently working on a project
          using React and Firebase.
        </p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            < FontAwesomeIcon icon={faAngular} color='#DD0031' />
          </div>
          <div className='face2'>
            < FontAwesomeIcon icon={faHtml5} color='#F06529' />
          </div>
          <div className='face3'>
            < FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
          <div className='face4'>
            < FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
          <div className='face5'>
            < FontAwesomeIcon icon={faJs} color='#EFD81D' />
            </div>
          <div className='face6'>
            < FontAwesomeIcon icon={faVuejs} color='#ECD4D28' />
            </div>
        </div>
      </div>
    </div>
    <Loader type="pacman"/>
    </>
  );
};

export default About
