import React from 'react';
import {  BsInstagram ,BsLinkedin , BsGithub} from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
     <a href='linkedin.com/in/tejas-bhatt-4995ab184'><BsLinkedin /></a>
    </div>
    <div>
     <a href='https://github.com/tejas1530' ><BsGithub /></a>
    </div>
    <div>
      <a href='https://www.instagram.com/anonymous____frnd/' ><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;