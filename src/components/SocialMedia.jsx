import React from 'react';
import { BsInstagram} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import { AiFillGithub,AiFillLinkedin} from 'react-icons/ai';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://github.com/Mr-Archisman' target='blank'>
            <AiFillGithub /> 
            </a>
        </div>
        <div>
            <a href='https://instagram.com/mr._.archie?igshid=YmMyMTA2M2Y=' target='blank'>
            <BsInstagram /> 
            </a>
        </div>
        <div>
            <a href='https://www.facebook.com/archisman.saha.925' target='blank'>
            <FaFacebookF /> 
            </a>
        </div>
        <div>
            <a href='https://www.linkedin.com/in/archisman-saha-7115b5229' target='blank'>
            <AiFillLinkedin /> 
            </a>
        </div>
    </div>
  )
}

export default SocialMedia