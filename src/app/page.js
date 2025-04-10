import BackgroundCTA from '@/assets/image/background-cta.png';
import CardIntegration from '@/assets/image/card-integration.png';
import IntegrationCardKYC from '@/assets/image/integration-card-kyc.png';
import OrnamentCard from '@/assets/image/ornament-card.png';
import Payment1 from '@/assets/image/payment-1.png';
import Payment2 from '@/assets/image/payment-2.png';
import Payment3 from '@/assets/image/payment-3.png';
import Container from '@/components/layout/container';
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const blogs = [
    {
      category: 'Product',
      readTime: '3 min read',
      title: 'How to reach the top of the digital wallet',
      date: 'December 07, 2022',
    },
    {
      category: 'Company',
      readTime: '5 min read',
      title: 'How Nivelle works with multiple banks',
      date: 'December 06, 2022',
    },
    {
      category: 'Company',
      readTime: '4 min read',
      title: 'Building fintech is still too hard: Introducing Nivelle',
      date: 'December 05, 2022',
    },
  ];

  return (
    <div className={cn(['z-0'])}>
      {/* ========== Hero ========== */}

      {/* ========== Solution ========== */}
      <div className={cn(['bg-[#F7F9FC]'])}>
        <Container>
          <div className={cn(['flex flex-col items-center gap-12 py-20'])}>
            <div className={cn(['flex max-w-2xl flex-col items-center gap-5'])}>
              <div className={cn(['border border-[#00B3FF] px-3 py-2 text-xs font-semibold text-[#00B3FF]'])}>Our Solution</div>
              <h1 className={cn(['text-center text-3xl font-bold sm:text-4xl md:text-5xl'])}>Our Solutions For Your Embedded Finance Needs</h1>
              <p className={cn(['px-4 text-center text-[#6C6F93] sm:px-8 md:px-12 lg:px-24'])}>
                Empower your users by building cards, accounts, payments, and lending products — as easy as plug-and-play.
              </p>
            </div>

            <div className={cn(['flex w-full flex-col gap-8 lg:flex-row'])}>
              <div
                className={cn(['relative z-0 flex flex-col gap-10 bg-white px-8 py-10 md:flex-row lg:w-[465px] lg:flex-col lg:px-10 lg:py-12'])}
              >
                <div className={cn(['h-[307px] w-full bg-blue-500 md:h-[224px] md:w-64 lg:h-[307px] lg:w-full'])} />
                <div className={cn(['flex flex-1 flex-col gap-8'])}>
                  <div className={cn(['flex flex-col gap-4'])}>
                    <h1 className={cn(['cursor-pointer leading-[130%] font-bold md:text-2xl lg:text-3xl'])}>Digital Banking & Cards</h1>
                    <p className={cn(['text-sm leading-[170%] tracking-[0.4px] text-[#6C6F93] lg:text-base'])}>
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
              <div className={cn(['flex flex-1 flex-col gap-8'])}>
                <div className={cn(['relative flex h-1/2 flex-col-reverse justify-between gap-8 bg-white px-8 py-10 md:flex-row'])}>
                  <Image src={OrnamentCard} alt="Ornament Card" className={cn(['absolute bottom-0 left-10 hidden lg:block'])} />
                  <div className={cn(['flex flex-1 flex-col gap-6'])}>
                    <div className={cn(['flex flex-col gap-3'])}>
                      <h1 className={cn(['cursor-pointer text-2xl leading-[130%] font-bold'])}>Lending</h1>
                      <p
                        title="Offer consumer and SME loans to your customers in your own branding."
                        className={cn(['line-clamp-2 overflow-hidden text-sm leading-[170%] tracking-[0.4px] text-ellipsis text-[#6C6F93]'])}
                      >
                        Offer consumer and SME loans to your customers in your own branding.
                      </p>
                    </div>
                    <Button variant="primary-outline" className={cn(['flex w-fit items-center gap-2'])}>
                      Learn More
                      <ArrowRight className={cn(['size-4'])} />
                    </Button>
                  </div>
                  <div className={cn(['h-[307px] w-full bg-blue-500 md:h-[224px] md:w-64'])} />
                </div>

                <div className={cn(['flex h-1/2 w-full flex-col gap-8 md:flex-row'])}>
                  <div className={cn(['flex w-full flex-col justify-between gap-8 bg-white px-8 py-10 md:w-1/2 md:gap-4'])}>
                    <div className={cn(['flex flex-col gap-3'])}>
                      <h1 className={cn(['cursor-pointer text-2xl leading-[130%] font-bold'])}>Payments</h1>
                      <p className={cn(['text-sm leading-[170%] tracking-[0.4px] text-[#6C6F93]'])}>Send and receive ACH, checks, and more.</p>
                    </div>

                    <div className={cn(['grid grid-cols-3 justify-between gap-3'])}>
                      <div className={cn(['flex h-[100px] flex-col items-center gap-3 bg-[#F7F9FC] py-3'])}>
                        <Image src={Payment1} alt="Payment 1" />
                        <div className={cn(['flex flex-col items-center gap-1'])}>
                          <span className="text-sm font-medium">ACH</span>
                          <span className="text-[8px] text-[#6C6F93]">Business Day</span>
                        </div>
                      </div>
                      <div className={cn(['flex h-[100px] flex-col items-center gap-3 bg-[#F7F9FC] py-3'])}>
                        <Image src={Payment2} alt="Payment 2" />
                        <div className={cn(['flex flex-col items-center gap-1'])}>
                          <span className="text-sm font-medium">Wire</span>
                          <span className="text-[8px] text-[#6C6F93]">Business Day</span>
                        </div>
                      </div>
                      <div className={cn(['flex h-[100px] flex-col items-center gap-3 bg-[#F7F9FC] py-3'])}>
                        <Image src={Payment3} alt="Payment 3" />
                        <div className={cn(['flex flex-col items-center gap-1'])}>
                          <span className="text-sm font-medium">Swift</span>
                          <span className="text-[8px] text-[#6C6F93]">Business Day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cn(['flex w-full flex-col justify-between gap-8 bg-white px-8 py-10 md:w-1/2 md:gap-4'])}>
                    <div className={cn(['flex flex-col gap-3'])}>
                      <h1 className={cn(['cursor-pointer text-2xl leading-[130%] font-bold'])}>KYC Platform</h1>
                      <p
                        title="Pellentesque quis id nec tortor velit ullamcorper elementum."
                        className={cn(['line-clamp-2 overflow-hidden text-sm leading-[170%] tracking-[0.4px] text-ellipsis text-[#6C6F93]'])}
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

      {/* ========== Integration ========== */}
      <Container>
        <div className={cn(['flex flex-col items-center gap-14 py-20'])}>
          <div className={cn(['flex max-w-xl flex-col items-center gap-5'])}>
            <div className={cn(['border border-[#00B3FF] px-3 py-2 text-xs font-semibold text-[#00B3FF]'])}>Bank Partners</div>
            <h1 className={cn(['text-center text-3xl font-bold sm:text-4xl md:text-5xl'])}>Fully Integrated with Multiple Banks</h1>
            <p className={cn(['px-4 text-center text-[#6C6F93] sm:px-8 md:px-28'])}>
              We work closely with all bank partners to ensure compliance, oversight, and security.
            </p>
          </div>

          <Image src={CardIntegration} alt="Card Integration" />
        </div>
      </Container>

      {/* ========== Blog ========== */}
      <div className={cn(['bg-[#F7F9FC]'])}>
        <Container>
          <div className={cn(['flex flex-col items-center gap-14 py-20'])}>
            <div className={cn(['flex max-w-2xl flex-col items-center gap-5'])}>
              <div className={cn(['border border-[#00B3FF] px-3 py-2 text-xs font-semibold text-[#00B3FF]'])}>Resources</div>
              <h1 className={cn(['text-center text-3xl font-bold sm:text-4xl md:text-5xl'])}>Explore Our Resources</h1>
              <p className={cn(['px-4 text-center text-[#6C6F93] sm:px-8 md:px-32'])}>
                Navigate articles, whitepapers and thought leadership pieces to learn more about Nivelle.
              </p>
            </div>

            <div className={cn(['grid w-full grid-cols-1 gap-8 lg:grid-cols-3'])}>
              {blogs.map(blog => (
                <BlogCard key={blog.title} {...blog} />
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ========== Click to Action ========== */}
      <Container>
        <div
          className={cn(['my-20 flex flex-col items-center gap-y-14 bg-cover bg-center py-[101px]'])}
          style={{ backgroundImage: `url(${BackgroundCTA.src})` }}
        >
          <h1 className={cn(['max-w-2xl text-center text-4xl font-bold text-white md:text-5xl lg:text-[56px]'])}>
            Start Building Your Own Banking Service
          </h1>
          <Button variant="white" className={cn(['mx-auto flex items-center gap-3'])}>
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
      <div className={cn(['h-[180px] w-full bg-blue-500'])} style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }} />
      <div className={cn(['flex flex-col gap-4'])}>
        <div className={cn(['flex flex-col gap-3'])}>
          <div className={cn(['flex items-center gap-4'])}>
            <div className={cn(['border border-[#1463FF] px-2.5 py-1 text-[11px] font-semibold text-[#1463FF]'])}>{category}</div>
            <span className={cn(['text-xs leading-[100%] font-normal tracking-[0.2px] text-[#6C6F93]'])}>{readTime}</span>
          </div>
          <h1 className={cn(['cursor-pointer text-2xl leading-[140%] font-bold tracking-[0.4px]'])}>{title}</h1>
        </div>
        <p className={cn(['text-sm leading-[100%] font-normal tracking-[0.2px] text-[#6C6F93]'])}>{date}</p>
      </div>
    </div>
  );
};
