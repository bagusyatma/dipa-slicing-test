'use client';

import BackgroundCTA from '@/assets/image/background-cta.png';
import BackgroundLining from '@/assets/image/background-lining.jpg';
import Blog1 from '@/assets/image/blog-1.jpg';
import Blog2 from '@/assets/image/blog-2.jpg';
import Blog3 from '@/assets/image/blog-3.jpg';
import CardIntegration from '@/assets/image/card-integration.png';
import HeroOrnament1 from '@/assets/image/hero-ornament-1.png';
import HeroOrnament2 from '@/assets/image/hero-ornament-2.png';
import HeroOrnament3 from '@/assets/image/hero-ornament-3.png';
import HeroOrnament4 from '@/assets/image/hero-ornament-4.png';
import HeroOrnamentBackground from '@/assets/image/hero-ornament-background.png';
import IntegrationCardKYC from '@/assets/image/integration-card-kyc.png';
import OrnamentCard from '@/assets/image/ornament-card.png';
import Payment1 from '@/assets/image/payment-1.png';
import Payment2 from '@/assets/image/payment-2.png';
import Payment3 from '@/assets/image/payment-3.png';
import Solution1 from '@/assets/image/solution-1.jpg';
import Solution2 from '@/assets/image/solution-2.jpg';
import TrustedCompany1 from '@/assets/image/trusted-company-1.png';
import TrustedCompany2 from '@/assets/image/trusted-company-2.png';
import TrustedCompany3 from '@/assets/image/trusted-company-3.png';
import TrustedCompany4 from '@/assets/image/trusted-company-4.png';
import WhyUs from '@/assets/image/why-us.jpg';
import Container from '@/components/layout/container';
import Button from '@/components/ui/button';
import SectionHeader from '@/components/ui/section-header';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    };

    initAOS();
  }, []);

  const blogs = [
    {
      imageUrl: Blog1,
      category: 'Product',
      readTime: '3 min read',
      title: 'How to reach the top of the digital wallet',
      date: 'December 07, 2022',
    },
    {
      imageUrl: Blog2,
      category: 'Company',
      readTime: '5 min read',
      title: 'How Nivelle works with multiple banks',
      date: 'December 06, 2022',
    },
    {
      imageUrl: Blog3,
      category: 'Company',
      readTime: '4 min read',
      title: 'Building fintech is still too hard: Introducing Nivelle',
      date: 'December 05, 2022',
    },
  ];

  return (
    <div className={cn(['z-0'])}>
      {/* ========== Hero ========== */}
      <Container>
        <div className={cn(['flex gap-16 pt-12 pb-24'])}>
          <div className={cn(['flex w-full flex-col items-center lg:w-[600px] lg:items-start'])}>
            <div
              data-aos="fade-down"
              data-aos-delay="0"
              className={cn(['flex w-fit items-center gap-2 border border-[#F0F2FA] bg-[#F7F9FC] p-2'])}
            >
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.88357 0.854706C6.96107 0.84791 7.03902 0.84791 7.11652 0.854706C7.20567 0.862525 7.29068 0.881547 7.35817 0.896648L12.3272 2.00089C12.4608 2.03056 12.5936 2.06006 12.7059 2.09381C12.8312 2.13148 12.9738 2.18621 13.1128 2.2863C13.309 2.42768 13.4631 2.61976 13.5585 2.84199C13.6261 2.99933 13.6486 3.15044 13.6582 3.28094C13.6667 3.39788 13.6667 3.53393 13.6667 3.6708V4.4547C13.6667 4.6229 13.6668 4.78677 13.6554 4.9255C13.643 5.07789 13.6136 5.25772 13.5214 5.43867C13.3936 5.68955 13.1896 5.89352 12.9387 6.02135C12.7577 6.11355 12.5779 6.14293 12.4255 6.15538C12.3959 6.1578 12.3651 6.15971 12.3334 6.1612V10.1721C12.3651 10.1736 12.3959 10.1755 12.4255 10.178C12.5779 10.1904 12.7577 10.2198 12.9387 10.312C13.1896 10.4398 13.3936 10.6438 13.5214 10.8947C13.6136 11.0756 13.643 11.2555 13.6554 11.4078C13.6668 11.5466 13.6667 11.7105 13.6667 11.8787V12.4547C13.6667 12.6229 13.6668 12.7868 13.6554 12.9255C13.643 13.0779 13.6136 13.2577 13.5214 13.4387C13.3936 13.6895 13.1896 13.8935 12.9387 14.0213C12.7577 14.1135 12.5779 14.1429 12.4255 14.1554C12.2868 14.1667 12.1229 14.1667 11.9546 14.1667H2.04545C1.87719 14.1667 1.71333 14.1667 1.57456 14.1554C1.42216 14.1429 1.24234 14.1135 1.06139 14.0213C0.810507 13.8935 0.606533 13.6895 0.478702 13.4387C0.386504 13.2577 0.357125 13.0779 0.344674 12.9255C0.333336 12.7867 0.333356 12.6229 0.333376 12.4546L0.333376 11.8787C0.333356 11.7105 0.333336 11.5466 0.344674 11.4078C0.357126 11.2555 0.386504 11.0756 0.478702 10.8947C0.606533 10.6438 0.810507 10.4398 1.06139 10.312C1.24234 10.2198 1.42216 10.1904 1.57456 10.178C1.6042 10.1755 1.63498 10.1736 1.66671 10.1721V6.1612C1.63498 6.15971 1.6042 6.1578 1.57456 6.15538C1.42216 6.14293 1.24234 6.11355 1.06139 6.02135C0.810507 5.89352 0.606533 5.68955 0.478702 5.43867C0.386504 5.25772 0.357125 5.07789 0.344674 4.9255C0.333336 4.78673 0.333356 4.62286 0.333376 4.45461L0.333376 3.67079C0.333359 3.53393 0.333342 3.39788 0.341931 3.28094C0.351516 3.15043 0.374003 2.99933 0.441577 2.84199C0.537013 2.61976 0.691098 2.42768 0.887331 2.2863C1.02627 2.18621 1.1689 2.13148 1.29422 2.09381C1.40651 2.06006 1.53932 2.03056 1.67293 2.00089L6.64192 0.896648C6.70941 0.881547 6.79442 0.862524 6.88357 0.854706ZM3.00004 6.16668V10.1667H4.66671V6.16668H3.00004ZM6.00004 6.16668V10.1667H8.00004V6.16668L6.00004 6.16668ZM9.33337 6.16668V10.1667H11V6.16668H9.33337Z"
                  fill="#9CA3AF"
                />
              </svg>
              <p className={cn(['text-tertiary-text text-sm leading-[100%] tracking-[0.2px]'])}>Banking-as-a-service platform</p>
            </div>

            <div className={cn(['relative mt-4'])} data-aos="fade-up" data-aos-delay="100">
              <h1
                className={cn([
                  'text-primary-text relative z-10 text-center text-4xl leading-[130%] font-semibold tracking-[-0.5px] sm:text-5xl md:text-6xl lg:text-left lg:text-7xl',
                ])}
              >
                Built Payment for <br /> Digital Freelancers
              </h1>

              <span
                className={cn(['absolute bottom-0 left-0 z-0 h-1 w-full bg-cover bg-center sm:h-1.5 md:h-2'])}
                style={{ backgroundImage: `url(${BackgroundLining.src})` }}
                data-aos="fade-right"
                data-aos-delay="1000"
              />
            </div>

            <div className={cn(['mt-6 max-w-xl'])} data-aos="fade-up" data-aos-delay="300">
              <p className={cn(['text-tertiary-text text-center text-lg leading-[170%] tracking-[0.4px] lg:text-left'])}>
                Nivelle is a banking-as-a-service platform that has everything you need to grow your business. Thousands of entrepreneurs rely
                on us to build in minutes, launch in one week.
              </p>
            </div>

            <div className={cn(['mt-16'])} data-aos="zoom-in" data-aos-delay="400">
              <Button variant="primary" size="lg" className={cn(['flex items-center gap-3'])}>
                Open an Account
                <ArrowRight className={cn(['size-6'])} />
              </Button>
            </div>

            <div className={cn(['mt-16 flex flex-col gap-6'])} data-aos="fade-up" data-aos-delay="500">
              <span className={cn(['text-tertiary-text text-center leading-[100%] tracking-[0.2px] lg:text-left'])}>
                More than 200+ companies trusted us worldwide
              </span>
              <div className={cn(['grid grid-cols-2 items-center justify-between gap-8 sm:grid-cols-4 lg:w-[563px]'])}>
                <div className={cn(['flex items-center justify-center'])} data-aos="zoom-in" data-aos-delay="600">
                  <Image src={TrustedCompany1} alt="Trusted Company 1" loading="lazy" width={100} height={50} />
                </div>
                <div className={cn(['flex items-center justify-center'])} data-aos="zoom-in" data-aos-delay="700">
                  <Image src={TrustedCompany2} alt="Trusted Company 2" loading="lazy" width={100} height={50} />
                </div>
                <div className={cn(['flex items-center justify-center'])} data-aos="zoom-in" data-aos-delay="800">
                  <Image src={TrustedCompany3} alt="Trusted Company 3" loading="lazy" width={100} height={50} />
                </div>
                <div className={cn(['flex items-center justify-center'])} data-aos="zoom-in" data-aos-delay="900">
                  <Image src={TrustedCompany4} alt="Trusted Company 4" loading="lazy" width={100} height={50} />
                </div>
              </div>
            </div>
          </div>
          <div className={cn(['relative hidden flex-1 lg:block'])} data-aos="fade-left" data-aos-delay="300">
            <div className={cn(['absolute right-0 h-full w-60'])} data-aos="fade-right" data-aos-delay="400">
              <Image src={HeroOrnamentBackground} alt="Hero Ornament Background" className={cn(['h-full w-full object-cover'])} />
            </div>

            <div className={cn(['absolute top-48 right-64 h-1/5 xl:top-36 xl:right-72 xl:h-1/3'])} data-aos="fade-up" data-aos-delay="500">
              <Image src={HeroOrnament1} alt="Hero Ornament 1" className={cn(['h-full w-full object-cover'])} />
            </div>

            <div className={cn(['absolute top-16 -right-8 h-1/2 xl:top-8 xl:h-2/3'])} data-aos="fade-down" data-aos-delay="600">
              <Image src={HeroOrnament2} alt="Hero Ornament 2" className={cn(['h-full w-full object-cover'])} />
            </div>

            <div className={cn(['absolute top-72 right-16 h-1/2 xl:h-2/3'])} data-aos="fade-left" data-aos-delay="700">
              <Image src={HeroOrnament3} alt="Hero Ornament 3" className={cn(['h-full w-full object-cover'])} />
            </div>

            <div className={cn(['absolute right-8 bottom-4 h-1/3 xl:right-16'])} data-aos="fade-up" data-aos-delay="800">
              <Image src={HeroOrnament4} alt="Hero Ornament 4" className={cn(['h-full w-full object-cover'])} />
            </div>
          </div>
        </div>
      </Container>

      {/* ========== Solution ========== */}
      <div className={cn(['bg-[#F7F9FC]'])}>
        <Container>
          <div className={cn(['flex flex-col items-center gap-12 py-20'])}>
            <SectionHeader
              category="Our Solution"
              title="Our Solutions For Your Embedded Finance Needs"
              description="Empower your users by building cards, accounts, payments, and lending products — as easy as plug-and-play."
            />

            <div className={cn(['flex w-full flex-col gap-8 lg:flex-row'])}>
              <div
                data-aos="fade-right"
                data-aos-delay="300"
                className={cn(['relative z-0 flex flex-col gap-10 bg-white px-8 py-10 md:flex-row lg:w-[465px] lg:flex-col lg:px-10 lg:py-12'])}
              >
                <div className={cn(['h-[307px] w-full bg-white md:h-[224px] md:w-64 lg:h-[307px] lg:w-full'])}>
                  <Image src={Solution1} alt="Solution 1" loading="lazy" width={400} height={180} className="object-cover" />
                </div>
                <div className={cn(['flex flex-1 flex-col gap-8'])}>
                  <div className={cn(['flex flex-col gap-4'])}>
                    <h1 className={cn(['text-primary-text cursor-pointer text-2xl leading-[130%] font-bold lg:text-3xl'])}>
                      Digital Banking & Cards
                    </h1>
                    <p className={cn(['text-secondary-text text-sm leading-[170%] tracking-[0.4px] lg:text-base'])}>
                      Fully programmable, high-interchange debit cards for individuals and businesses.
                    </p>
                  </div>
                  <Button variant="primary-outline" size="lg" className={cn(['hidden w-fit items-center gap-2 lg:flex'])}>
                    Learn More
                    <ArrowRight className={cn(['size-4'])} />
                  </Button>
                  <Button variant="primary-outline" className={cn(['flex w-fit items-center gap-2 lg:hidden'])}>
                    Learn More
                    <ArrowRight className={cn(['size-4'])} />
                  </Button>
                </div>
              </div>

              <div className={cn(['flex flex-1 flex-col gap-8'])} data-aos="fade-up" data-aos-delay="400">
                <div className={cn(['relative flex h-1/2 flex-col-reverse justify-between gap-8 bg-white px-8 py-10 md:flex-row'])}>
                  <Image src={OrnamentCard} alt="Ornament Card" className={cn(['absolute bottom-0 left-10 hidden lg:block'])} />
                  <div className={cn(['flex flex-1 flex-col gap-6'])}>
                    <div className={cn(['flex flex-col gap-3'])}>
                      <h1 className={cn(['text-primary-text cursor-pointer text-2xl leading-[130%] font-bold'])}>Lending</h1>
                      <p
                        title="Offer consumer and SME loans to your customers in your own branding."
                        className={cn([
                          'text-secondary-text line-clamp-2 overflow-hidden text-sm leading-[170%] tracking-[0.4px] text-ellipsis',
                        ])}
                      >
                        Offer consumer and SME loans to your customers in your own branding.
                      </p>
                    </div>
                    <Button variant="primary-outline" className={cn(['flex w-fit items-center gap-2'])}>
                      Learn More
                      <ArrowRight className={cn(['size-4'])} />
                    </Button>
                  </div>
                  <div className={cn(['h-[307px] w-full bg-white md:h-[224px] md:w-64'])}>
                    <Image src={Solution2} alt="Solution 2" loading="lazy" width={400} height={180} className="object-cover" />
                  </div>
                </div>

                <div className={cn(['flex h-1/2 w-full flex-col gap-8 md:flex-row'])}>
                  <div
                    className={cn(['flex w-full flex-col justify-between gap-8 bg-white px-8 py-10 md:w-1/2 md:gap-4'])}
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div className={cn(['flex flex-col gap-3'])}>
                      <h1 className={cn(['text-primary-text cursor-pointer text-2xl leading-[130%] font-bold'])}>Payments</h1>
                      <p className={cn(['text-secondary-text text-sm leading-[170%] tracking-[0.4px]'])}>
                        Send and receive ACH, checks, and more.
                      </p>
                    </div>

                    <div className={cn(['grid grid-cols-3 justify-between gap-3'])}>
                      <div
                        className={cn(['flex h-[100px] flex-col items-center gap-3 bg-[#F7F9FC] py-3'])}
                        data-aos="zoom-in"
                        data-aos-delay="650"
                      >
                        <Image src={Payment1} alt="Payment 1" className={cn(['h-8 w-8'])} />
                        <div className={cn(['flex flex-col items-center gap-1'])}>
                          <span className="text-primary-text text-sm font-medium">ACH</span>
                          <span className="text-secondary-text text-[8px]">Business Day</span>
                        </div>
                      </div>
                      <div
                        className={cn(['flex h-[100px] flex-col items-center gap-3 bg-[#F7F9FC] py-3'])}
                        data-aos="zoom-in"
                        data-aos-delay="700"
                      >
                        <Image src={Payment2} alt="Payment 2" className={cn(['h-8 w-8'])} />
                        <div className={cn(['flex flex-col items-center gap-1'])}>
                          <span className="text-primary-text text-sm font-medium">Wire</span>
                          <span className="text-secondary-text text-[8px]">Business Day</span>
                        </div>
                      </div>
                      <div
                        className={cn(['flex h-[100px] flex-col items-center gap-3 bg-[#F7F9FC] py-3'])}
                        data-aos="zoom-in"
                        data-aos-delay="750"
                      >
                        <Image src={Payment3} alt="Payment 3" className={cn(['h-8 w-8'])} />
                        <div className={cn(['flex flex-col items-center gap-1'])}>
                          <span className="text-primary-text text-sm font-medium">Swift</span>
                          <span className="text-secondary-text text-[8px]">Business Day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={cn(['flex w-full flex-col justify-between gap-8 bg-white px-8 py-10 md:w-1/2 md:gap-4'])}
                    data-aos="fade-left"
                    data-aos-delay="800"
                  >
                    <div className={cn(['flex flex-col gap-3'])}>
                      <h1 className={cn(['text-primary-text cursor-pointer text-2xl leading-[130%] font-bold'])}>KYC Platform</h1>
                      <p
                        title="Pellentesque quis id nec tortor velit ullamcorper elementum."
                        className={cn([
                          'text-secondary-text line-clamp-2 overflow-hidden text-sm leading-[170%] tracking-[0.4px] text-ellipsis',
                        ])}
                      >
                        Pellentesque quis id nec tortor velit ullamcorper elementum.
                      </p>
                    </div>

                    <Image src={IntegrationCardKYC} alt="Integration Card KYC" className={cn(['w-full'])} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ========== Why ========== */}
      <div className="mx-auto max-w-5xl px-4 lg:px-4 xl:px-0">
        <div className={cn(['flex gap-14 py-24'])}>
          <div className={cn(['flex w-full flex-col gap-10 lg:w-[465px]'])}>
            <div className={cn(['flex flex-col items-center gap-5 lg:items-start'])}>
              <div
                className={cn(['w-fit border border-[#00B3FF] px-3 py-2 text-xs font-semibold text-[#00B3FF]'])}
                data-aos="fade-down"
                data-aos-delay="0"
              >
                Why Nivelle
              </div>
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className={cn([
                  'text-primary-text px-8 text-center text-3xl leading-[130%] font-bold tracking-[0.2px] sm:px-0 sm:text-4xl md:text-left md:text-5xl',
                ])}
              >
                Why Should You Work with Us
              </h1>
            </div>
            <div className={cn(['flex flex-col gap-8'])}>
              <div className={cn(['flex items-start gap-6'])} data-aos="fade-right" data-aos-delay="200">
                <div className={cn(['flex size-14 items-center justify-center bg-[#F7F9FC]'])}>
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.166626 13C0.166626 5.91231 5.91231 0.166626 13 0.166626C20.0876 0.166626 25.8333 5.91231 25.8333 13C25.8333 15.7568 24.964 18.3106 23.4846 20.4022C23.2953 20.6698 23.2007 20.8037 23.0592 20.8691C22.9408 20.9238 22.7886 20.9368 22.6626 20.9028C22.5122 20.8623 22.3879 20.738 22.1395 20.4896L21.7512 20.1013C21.0347 19.3844 20.5388 18.8882 19.9482 18.5263C19.4263 18.2064 18.8573 17.9707 18.2621 17.8278C17.5885 17.6661 16.887 17.6664 15.8734 17.6667L10.1264 17.6667C9.11291 17.6664 8.41135 17.6662 7.73784 17.8279C7.14264 17.9708 6.57364 18.2065 6.05172 18.5263C5.46114 18.8882 4.96521 19.3844 4.24874 20.1013L3.8604 20.4896C3.61199 20.7381 3.48778 20.8623 3.33729 20.9028C3.21137 20.9368 3.05911 20.9238 2.94074 20.8691C2.79926 20.8037 2.70461 20.6699 2.5153 20.4022C1.0359 18.3106 0.166626 15.7568 0.166626 13ZM14.1666 2.49996C14.1666 1.85563 13.6443 1.33329 13 1.33329C12.3556 1.33329 11.8333 1.85563 11.8333 2.49996V5.12496C11.8333 5.76929 12.3556 6.29163 13 6.29163C13.6443 6.29163 14.1666 5.76929 14.1666 5.12496V2.49996ZM2.49996 11.8333C1.85563 11.8333 1.33329 12.3556 1.33329 13C1.33329 13.6443 1.85563 14.1666 2.49996 14.1666H5.12496C5.76929 14.1666 6.29163 13.6443 6.29163 13C6.29163 12.3556 5.76929 11.8333 5.12496 11.8333H2.49996ZM20.875 11.8333C20.2306 11.8333 19.7083 12.3556 19.7083 13C19.7083 13.6443 20.2306 14.1666 20.875 14.1666H23.5C24.1443 14.1666 24.6666 13.6443 24.6666 13C24.6666 12.3556 24.1443 11.8333 23.5 11.8333H20.875ZM6.39262 4.82494C5.937 4.36933 5.19831 4.36933 4.7427 4.82494C4.28709 5.28056 4.28709 6.01925 4.7427 6.47486L6.56597 8.29813C7.02158 8.75375 7.76028 8.75375 8.21589 8.29813C8.6715 7.84252 8.6715 7.10383 8.21589 6.64822L6.39262 4.82494ZM21.2514 6.48069C21.7102 6.02832 21.7155 5.28964 21.2631 4.83081C20.8107 4.37198 20.072 4.36675 19.6132 4.81912L13.7558 10.5941C13.706 10.6432 13.6616 10.6956 13.6225 10.7506C13.4243 10.6959 13.2156 10.6666 13 10.6666C11.7113 10.6666 10.6666 11.7113 10.6666 13C10.6666 14.2886 11.7113 15.3333 13 15.3333C14.2886 15.3333 15.3333 14.2886 15.3333 13C15.3333 12.7843 15.304 12.5754 15.2492 12.3771C15.2999 12.3412 15.3483 12.3007 15.394 12.2557L21.2514 6.48069Z"
                      fill="#0E0B3D"
                    />
                    <path
                      d="M20.1953 21.8452L20.4896 22.1396C20.738 22.388 20.8622 22.5122 20.9028 22.6627C20.9367 22.7886 20.9238 22.9408 20.869 23.0592C20.8036 23.2007 20.6698 23.2954 20.4022 23.4847C18.3105 24.964 15.7568 25.8333 13 25.8333C10.2432 25.8333 7.68939 24.964 5.59778 23.4847C5.33013 23.2954 5.1963 23.2007 5.1309 23.0592C5.07618 22.9409 5.06322 22.7886 5.09715 22.6627C5.13771 22.5122 5.26192 22.388 5.51034 22.1396L5.80466 21.8452C6.65103 20.9989 6.94506 20.7155 7.27088 20.5158C7.58403 20.3239 7.92543 20.1825 8.28255 20.0968C8.65412 20.0075 9.06245 20 10.2594 20L15.7405 20C16.9374 20 17.3458 20.0075 17.7174 20.0967C18.0745 20.1824 18.4159 20.3239 18.729 20.5158C19.0549 20.7154 19.3489 20.9989 20.1953 21.8452Z"
                      fill="#0E0B3D"
                    />
                  </svg>
                </div>
                <div className={cn(['flex flex-1 flex-col gap-2'])}>
                  <h1 className={cn(['text-primary-text text-lg leading-[130%] font-bold tracking-[0.2px]'])}>Speed and Flexibility</h1>
                  <p className={cn(['text-secondary-text text-sm leading-[170%] tracking-[0.4px]'])}>
                    Offer unique features and terms that work for your users. Customize the experience with Nivelle flexible API.
                  </p>
                </div>
              </div>
              <div className={cn(['flex items-start gap-6'])} data-aos="fade-right" data-aos-delay="300">
                <div className={cn(['flex size-14 items-center justify-center bg-[#F7F9FC]'])}>
                  <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.35512 0.166627H16.6451C17.26 0.166607 17.7906 0.16659 18.2276 0.202293C18.6889 0.239978 19.1476 0.32318 19.5891 0.548106C20.2476 0.883663 20.7831 1.4191 21.1186 2.07766C21.3435 2.5191 21.4267 2.97786 21.4644 3.4391C21.5001 3.87609 21.5001 4.40664 21.5001 5.02163L21.5001 5.93934C21.5005 6.34372 21.5007 6.70042 21.4286 7.05179C21.3652 7.36071 21.2604 7.65964 21.1169 7.94047C20.9537 8.2599 20.7306 8.53827 20.4778 8.85384L16.2229 14.1724C18.6802 16.921 18.5891 21.1437 15.9498 23.783C13.2161 26.5167 8.78393 26.5167 6.05025 23.783C3.41085 21.1436 3.31984 16.9209 5.7772 14.1723L1.52239 8.85382C1.26952 8.53825 1.04647 8.25989 0.883281 7.94047C0.739808 7.65964 0.634948 7.36071 0.571547 7.05179C0.499436 6.70042 0.49972 6.34372 0.500043 5.93934L0.500085 5.02166C0.500064 4.40666 0.500046 3.8761 0.53575 3.4391C0.573435 2.97786 0.656637 2.5191 0.881563 2.07766C1.21712 1.4191 1.75255 0.883663 2.41112 0.548106C2.85256 0.32318 3.31132 0.239978 3.77255 0.202293C4.20954 0.16659 4.74013 0.166607 5.35512 0.166627ZM11.0001 11.0997L16.5101 4.01541C16.886 3.53204 17.074 3.29036 17.0723 3.08744C17.0708 2.91092 16.9894 2.74457 16.851 2.63501C16.6919 2.50907 16.3857 2.50907 15.7733 2.50907L6.22677 2.50907C5.6144 2.50907 5.30822 2.50907 5.14911 2.63501C5.01069 2.74457 4.92933 2.91092 4.92783 3.08744C4.9261 3.29036 5.11408 3.53204 5.49004 4.01542L11.0001 11.0997Z"
                      fill="#0E0B3D"
                    />
                  </svg>
                </div>
                <div className={cn(['flex flex-1 flex-col gap-2'])}>
                  <h1 className={cn(['text-primary-text text-lg leading-[130%] font-bold tracking-[0.2px]'])}>Increased Customer Loyalty</h1>
                  <p className={cn(['text-secondary-text text-sm leading-[170%] tracking-[0.4px]'])}>
                    Integrate financial services into your product landscape and increase customer loyalty with this service.
                  </p>
                </div>
              </div>
              <div className={cn(['flex items-start gap-6'])} data-aos="fade-right" data-aos-delay="400">
                <div className={cn(['flex size-14 items-center justify-center bg-[#F7F9FC]'])}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.7962 0.370736C11.9318 0.358843 12.0682 0.358843 12.2039 0.370736C12.3599 0.384418 12.5087 0.417707 12.6268 0.444134L21.3225 2.37655C21.5563 2.42848 21.7887 2.4801 21.9852 2.53916C22.2046 2.60508 22.4541 2.70086 22.6973 2.87603C23.0407 3.12343 23.3104 3.45958 23.4774 3.84848C23.5956 4.12383 23.635 4.38826 23.6517 4.61665C23.6668 4.82129 23.6667 5.05938 23.6667 5.2989V6.67073C23.6668 6.96508 23.6668 7.25185 23.6469 7.49462C23.6252 7.76132 23.5737 8.07601 23.4124 8.39267C23.1887 8.83171 22.8317 9.18867 22.3927 9.41237C22.076 9.57372 21.7613 9.62513 21.4946 9.64692C21.4428 9.65116 21.3889 9.65449 21.3334 9.65711V16.6763C21.3889 16.6789 21.4428 16.6822 21.4946 16.6864C21.7613 16.7082 22.076 16.7596 22.3927 16.921C22.8317 17.1447 23.1887 17.5016 23.4124 17.9407C23.5737 18.2574 23.6252 18.572 23.6469 18.8387C23.6668 19.0815 23.6668 19.3683 23.6667 19.6627V20.6708C23.6668 20.9651 23.6668 21.2519 23.6469 21.4946C23.6252 21.7613 23.5737 22.076 23.4124 22.3926C23.1887 22.8317 22.8317 23.1886 22.3927 23.4124C22.076 23.5737 21.7613 23.6251 21.4946 23.6469C21.2518 23.6667 20.965 23.6667 20.6706 23.6667H3.3295C3.03505 23.6667 2.7483 23.6667 2.50544 23.6469C2.23875 23.6251 1.92406 23.5737 1.6074 23.4124C1.16836 23.1886 0.811403 22.8317 0.587698 22.3926C0.426351 22.076 0.374939 21.7613 0.353149 21.4946C0.333308 21.2518 0.333342 20.965 0.333377 20.6705L0.333377 19.6628C0.333342 19.3683 0.333308 19.0816 0.35315 18.8387C0.374939 18.572 0.426351 18.2574 0.587698 17.9407C0.811403 17.5016 1.16836 17.1447 1.6074 16.921C1.92406 16.7596 2.23875 16.7082 2.50545 16.6864C2.55731 16.6822 2.61119 16.6789 2.66671 16.6763V9.65711C2.61119 9.65449 2.55731 9.65116 2.50544 9.64692C2.23875 9.62513 1.92406 9.57372 1.6074 9.41237C1.16836 9.18867 0.811403 8.83171 0.587698 8.39267C0.426351 8.07601 0.374939 7.76132 0.353149 7.49462C0.333308 7.25177 0.333342 6.96501 0.333377 6.67056L0.333378 5.29889C0.333348 5.05938 0.333319 4.82129 0.348348 4.61665C0.365123 4.38826 0.404475 4.12383 0.522728 3.84848C0.689743 3.45958 0.959391 3.12343 1.3028 2.87603C1.54594 2.70086 1.79554 2.60508 2.01485 2.53916C2.21136 2.4801 2.44378 2.42848 2.6776 2.37655L11.3733 0.444134C11.4914 0.417707 11.6402 0.384418 11.7962 0.370736ZM5.00004 9.66669V16.6667H7.91671V9.66669H5.00004ZM10.25 9.66669V16.6667H13.75V9.66669L10.25 9.66669ZM16.0834 9.66669V16.6667H19V9.66669H16.0834Z"
                      fill="#0E0B3D"
                    />
                  </svg>
                </div>
                <div className={cn(['flex flex-1 flex-col gap-2'])}>
                  <h1 className={cn(['text-primary-text text-lg leading-[130%] font-bold tracking-[0.2px]'])}>Fully Licensed Bank</h1>
                  <p className={cn(['text-secondary-text text-sm leading-[170%] tracking-[0.4px]'])}>
                    We always handle all the complexities, so you can focus on creating the best products for your customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={cn(['hidden flex-1 lg:block'])} data-aos="fade-left" data-aos-delay="300">
            <Image src={WhyUs} alt="Why Us" />
          </div>
        </div>
      </div>

      {/* ========== Integration ========== */}
      <Container>
        <div className={cn(['flex flex-col items-center gap-14 py-24'])}>
          <SectionHeader
            category="Bank Partners"
            title="Fully Integrated with Multiple Banks"
            description="We work closely with all bank partners to ensure compliance, oversight, and security."
          />

          <Image data-aos="zoom-in" data-aos-delay="300" src={CardIntegration} alt="Card Integration" />
        </div>
      </Container>

      {/* ========== Blog ========== */}
      <div className={cn(['bg-[#F7F9FC]'])}>
        <Container>
          <div className={cn(['flex flex-col items-center gap-14 py-20'])}>
            <SectionHeader
              category="Resources"
              title="Explore Our Resources"
              description="Navigate articles, whitepapers and thought leadership pieces to learn more about Nivelle."
            />

            <div className={cn(['grid w-full grid-cols-1 gap-8 lg:grid-cols-3'])}>
              {blogs.map((blog, index) => (
                <div key={blog.title} data-aos="zoom-in" data-aos-delay={300 + index * 50}>
                  <BlogCard {...blog} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ========== Click to Action ========== */}
      <Container>
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="600"
          className={cn(['my-20 flex flex-col items-center gap-y-14 bg-cover bg-center py-[101px]'])}
          style={{ backgroundImage: `url(${BackgroundCTA.src})` }}
        >
          <h1
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="600"
            className={cn(['max-w-2xl text-center text-4xl font-bold text-white md:text-5xl lg:text-[56px]'])}
          >
            Start Building Your Own Banking Service
          </h1>
          <Button
            data-aos="zoom-in"
            data-aos-delay="800"
            data-aos-duration="600"
            variant="white"
            className={cn(['mx-auto flex items-center gap-3'])}
          >
            Open an Account
            <ArrowRight className={cn(['size-4'])} />
          </Button>
        </div>
      </Container>
    </div>
  );
}

const BlogCard = ({ category, readTime, title, date, imageUrl }) => {
  return (
    <div className={cn(['flex flex-col gap-6 bg-white p-6'])}>
      <div className={cn(['h-[180px] w-full'])}>
        <Image src={imageUrl} alt={title} loading="lazy" width={400} height={180} className="object-cover" />
      </div>
      <div className={cn(['flex flex-col gap-4'])}>
        <div className={cn(['flex flex-col gap-3'])}>
          <div className={cn(['flex items-center gap-4'])}>
            <div className={cn(['border border-[#1463FF] px-2.5 py-1 text-[11px] font-semibold text-[#1463FF]'])}>{category}</div>
            <span className={cn(['text-secondary-text text-xs leading-[100%] font-normal tracking-[0.2px]'])}>{readTime}</span>
          </div>
          <h1 className={cn(['text-primary-text cursor-pointer text-2xl leading-[140%] font-bold tracking-[0.4px]'])}>{title}</h1>
        </div>
        <p className={cn(['text-secondary-text text-sm leading-[100%] font-normal tracking-[0.2px]'])}>{date}</p>
      </div>
    </div>
  );
};
