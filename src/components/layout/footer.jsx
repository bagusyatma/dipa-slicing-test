import LogoWithCircle from '@/assets/image/logo-with-circle.png';
import Container from '@/components/layout/container';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-[#F0F2FA] bg-white py-8 lg:py-16">
      <Container>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 lg:flex-row">
          <div className={cn(['flex cursor-pointer items-center gap-4'])}>
            <Image src={LogoWithCircle} alt="logo" className={cn(['size-7'])} />
            <h1 className={cn(['text-primary-text text-2xl font-bold'])}>Nivelle</h1>
          </div>

          <div className={cn(['grid w-full grid-cols-2 gap-12 lg:w-auto lg:grid-cols-4'])}>
            <div className={cn(['flex h-full w-full flex-col gap-6'])}>
              <h1 className={cn(['text-primary-text text-lg font-semibold'])}>Products</h1>
              <div className={cn(['text-secondary-text flex flex-col gap-5'])}>
                <span className={cn(['cursor-pointer'])}>Business Banking</span>
                <span className={cn(['cursor-pointer'])}>Consumer Banking</span>
                <span className={cn(['cursor-pointer'])}>Digital Freelance</span>
                <span className={cn(['cursor-pointer'])}>Customers</span>
              </div>
            </div>
            <div className={cn(['flex h-full w-full flex-col gap-6'])}>
              <h1 className={cn(['text-primary-text text-lg font-semibold'])}>Resources</h1>
              <div className={cn(['text-secondary-text flex flex-col gap-5'])}>
                <span className={cn(['cursor-pointer'])}>Guides</span>
                <span className={cn(['cursor-pointer'])}>Blog</span>
                <span className={cn(['cursor-pointer'])}>Roadmap</span>
                <span className={cn(['cursor-pointer'])}>Compliance</span>
                <span className={cn(['cursor-pointer'])}>Security</span>
              </div>
            </div>
            <div className={cn(['flex h-full w-full flex-col gap-6'])}>
              <h1 className={cn(['text-primary-text text-lg font-semibold'])}>Company</h1>
              <div className={cn(['text-secondary-text flex flex-col gap-5'])}>
                <span className={cn(['cursor-pointer'])}>About Us</span>
                <div className="flex items-center gap-2">
                  <span className={cn(['cursor-pointer'])}>Careers</span>
                  <span className="bg-[#4361EE] px-2 py-1 text-[11px] text-white sm:text-xs lg:px-3">We're hiring!</span>
                </div>
                <span className={cn(['cursor-pointer'])}>Terms</span>
                <span className={cn(['cursor-pointer'])}>Privacy & Policy</span>
              </div>
            </div>
            <div className={cn(['flex h-full w-full flex-col gap-6'])}>
              <h1 className={cn(['text-primary-text text-lg font-semibold'])}>Support</h1>
              <div className={cn(['text-secondary-text flex flex-col gap-5'])}>
                <span className={cn(['cursor-pointer'])}>Get Help</span>
                <span className={cn(['cursor-pointer'])}>FAQ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-28 flex max-w-7xl items-center justify-between">
          <span className="text-secondary-text text-sm">© 2022, Nivelle Technologies. Inc</span>
          <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
            <div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.85758 6.474H9.95258V8.01567C10.3984 7.129 11.5417 6.33234 13.2592 6.33234C16.5517 6.33234 17.3334 8.09734 17.3334 11.3357V17.3332H14.0001V12.0732C14.0001 10.229 13.5542 9.189 12.4192 9.189C10.8451 9.189 10.1909 10.3098 10.1909 12.0723V17.3332H6.85758V6.474ZM1.14175 17.1915H4.47508V6.33234H1.14175V17.1915ZM4.95258 2.7915C4.9527 3.0709 4.89729 3.34753 4.78957 3.60533C4.68185 3.86312 4.52396 4.09693 4.32508 4.29317C3.92208 4.69369 3.37659 4.91788 2.80841 4.9165C2.24124 4.91612 1.69701 4.6925 1.29341 4.294C1.09526 4.0971 0.937903 3.86302 0.830368 3.6052C0.722833 3.34737 0.667231 3.07086 0.666748 2.7915C0.666748 2.22734 0.891748 1.68734 1.29425 1.289C1.69749 0.889969 2.24195 0.666255 2.80925 0.666504C3.37758 0.666504 3.92258 0.890671 4.32508 1.289C4.72675 1.68734 4.95258 2.22734 4.95258 2.7915Z"
                  fill="#6C6F93"
                />
              </svg>
            </div>

            <div>
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.7024 2.11415C19.0066 2.42248 18.2591 2.63082 17.4733 2.72498C18.2841 2.23981 18.8907 1.4762 19.1799 0.576649C18.4181 1.02914 17.5844 1.34765 16.7149 1.51832C16.1302 0.894037 15.3558 0.480255 14.5119 0.341211C13.6679 0.202168 12.8017 0.345642 12.0476 0.74936C11.2936 1.15308 10.6939 1.79445 10.3417 2.5739C9.98954 3.35335 9.90454 4.22727 10.0999 5.05998C8.55633 4.98248 7.04629 4.58127 5.66778 3.8824C4.28928 3.18353 3.07313 2.20262 2.09826 1.00332C1.76493 1.57832 1.57326 2.24498 1.57326 2.95498C1.57289 3.59415 1.73029 4.22352 2.03149 4.78726C2.3327 5.351 2.7684 5.83168 3.29993 6.18665C2.68349 6.16704 2.08066 6.00047 1.5416 5.70082V5.75082C1.54153 6.64727 1.85162 7.51613 2.41925 8.20998C2.98687 8.90383 3.77707 9.37992 4.65576 9.55748C4.08391 9.71225 3.48438 9.73504 2.90243 9.62415C3.15034 10.3955 3.63326 11.07 4.28357 11.5533C4.93388 12.0365 5.71903 12.3043 6.5291 12.3192C5.15396 13.3987 3.45567 13.9842 1.70743 13.9816C1.39775 13.9817 1.08833 13.9636 0.780762 13.9275C2.55533 15.0685 4.62105 15.674 6.73076 15.6716C13.8724 15.6716 17.7766 9.75665 17.7766 4.62665C17.7766 4.45998 17.7724 4.29165 17.7649 4.12498C18.5243 3.57579 19.1799 2.89573 19.7008 2.11665L19.7024 2.11415Z"
                  fill="#6C6F93"
                />
              </svg>
            </div>

            <div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3_9787)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z"
                    fill="#6C6F93"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3_9787">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
