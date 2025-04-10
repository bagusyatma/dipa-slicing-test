import LogoWithoutCircle from '@/assets/image/logo-without-circle.png';
import { cn } from '@/lib/utils';
import { XIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Banner({ isClosed, onClosed }) {
  return isClosed ? null : (
    <div className={cn(['relative z-50 w-full bg-[#0E0B3D] py-2 text-xs text-white'])}>
      <div className={cn(['flex items-center justify-center gap-2.5'])}>
        <Image src={LogoWithoutCircle} alt="logo" className={cn(['size-4'])} />
        <React.Fragment>
          <span className={cn(['hidden cursor-pointer underline sm:inline'])}>
            What's new! We added new features for changelog 1.1.0. Learn more
          </span>
          <span className={cn(['inline cursor-pointer underline sm:hidden'])}>New in 1.1.0 – Learn more</span>
        </React.Fragment>
      </div>

      <button
        className={cn(['absolute top-0 right-4 flex h-full cursor-pointer items-center focus:outline-none sm:right-8'])}
        onClick={onClosed}
      >
        <XIcon className={cn(['size-4'])} />
      </button>
    </div>
  );
}
