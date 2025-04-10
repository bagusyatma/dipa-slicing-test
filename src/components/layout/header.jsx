'use client';

import LogoWithCircle from '@/assets/image/logo-with-circle.png';
import Container from '@/components/layout/container';
import Button from '@/components/ui/button';
import { menus } from '@/lib/constant/menus';
import { cn } from '@/lib/utils';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Header({ isExpanded, onExpanded }) {
  return (
    <React.Fragment>
      <header className={cn(['relative z-50 bg-white'])}>
        <Container>
          <div className={cn(['mx-auto flex max-w-7xl items-center justify-between py-4 lg:py-7'])}>
            <div className={cn(['flex items-center gap-16'])}>
              <div className={cn(['flex cursor-pointer items-center gap-4'])}>
                <Image src={LogoWithCircle} alt="logo" className={cn(['size-7'])} />
                <h1 className={cn(['text-2xl font-bold'])}>Nivelle</h1>
              </div>

              <div className={cn(['hidden items-center gap-10 lg:flex'])}>
                {menus.map((menu, index) => (
                  <button key={index} className={cn(['cursor-pointer focus:outline-none'])}>
                    {menu.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={cn(['hidden items-center gap-4 lg:flex'])}>
              <Button variant="ghost">Login</Button>
              <Button variant="outline-secondary">Sign Up</Button>
            </div>

            <div className={cn(['flex items-center lg:hidden'])}>
              <Button variant="ghost" onClick={onExpanded} size="sn">
                <MenuIcon className={cn(['size-6'])} />
              </Button>
            </div>
          </div>
        </Container>
      </header>
    </React.Fragment>
  );
}
