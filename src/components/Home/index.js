import { Link } from 'react-router-dom';
import LogoTitle from  '../../assets/images/logoT.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import React, { useEffect, useState } from "react";
import Loader from 'react-loaders';



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'm', ' ', 'D', 'u', 'c', 'h', 'a', 'm', 'b', 'o', 'n'];
    const jobArray = ['F', 'u', 'l', 'l', ' ', 'S', 't', 'a', 'c', 'k', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  useEffect(() => {
      setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])


  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt='developer' />
            <AnimatedLetters letterClass={letterClass}
             strArray={nameArray}
             idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass}
             strArray={jobArray}
             idx={27} />
             </h1>
            <h2>Full Stack Developer</h2>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
      {/* <Logo /> */}
      </div>
      <Loader type='pacman' />
    </>
  );

}

export default Home
