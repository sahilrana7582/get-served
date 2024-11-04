import { Button } from '@mui/material';
import React from 'react';
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';

const Footer = () => {
  return (
    <div>
      <div className="min-h-[200px] bg-black gap-4 flex flex-col">
        <div className="flex justify-center pt-10 gap-4">
          <Button
            variant="outlined"
            color="secondary"
            className="flex justify-center items-center rounded-full p-6"
          >
            <FaXTwitter size={25} />
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className="flex justify-center items-center rounded-full p-6"
            href="https://github.com/sahilrana7582"
            target="_blank"
          >
            <FaGithub size={25} />
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className="flex justify-center items-center rounded-full p-6"
            href="https://www.linkedin.com/in/sahil-rana-51b669331/"
            target="_blank"
          >
            <FaLinkedinIn size={25} />
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className="flex justify-center items-center rounded-full p-6"
            href="https://www.instagram.com/sahiil.thakur/"
            target="_blank"
          >
            <FaInstagram size={25} />
          </Button>
        </div>
        <div className="flex justify-center">
          <h3 className="text-purple-600 flex items-baseline font-semibold">
            Mail Me Here: sahilrana7582@gmail.com
          </h3>
        </div>
      </div>
      <div className="h-fit bg-black text-white p-4">
        <h3 className="text-purple-600  text-base flex font-semibold justify-center items-center">
          Copyright @2024: MADE BY SAHIL{' '}
        </h3>
      </div>
    </div>
  );
};

export default Footer;
