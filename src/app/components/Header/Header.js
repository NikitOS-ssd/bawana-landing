'use client'

import React from 'react';
import Button from '../Button/Button.client';

const BWANA_IMAGE = 'https://bwanabet.com/files/webexIconsDesktop/assets/image/header/bwanabet_large.png'

const Header = () => {

  return (
    <header className="flex justify-between items-center py-4 px-12" style={{ backgroundColor: '#15191f' }}>
      <div className="w-72">
        <img src={BWANA_IMAGE} alt='Logo' className="w-full" />
      </div>

      <div>
        <Button url={'https://bwanabet.com/en/auth/signup'} size="middle">
          Register
        </Button>
      </div>
    </header>
  );
};

export default Header;
