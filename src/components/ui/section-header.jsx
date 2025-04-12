import { cn } from '@/lib/utils';

export default function SectionHeader({ category, title, description, className, dataAosDelay = 0 }) {
  return (
    <div className={cn(['flex max-w-xl flex-col items-center gap-5', className])}>
      <div
        className={cn(['border border-[#00B3FF] px-3 py-2 text-xs font-semibold text-[#00B3FF]'])}
        data-aos="fade-down"
        data-aos-delay={dataAosDelay}
      >
        {category}
      </div>
      <h1
        className={cn(['text-primary-text text-center text-3xl leading-[130%] font-bold tracking-[0.2px] sm:text-4xl md:text-5xl'])}
        data-aos="fade-up"
        data-aos-delay={dataAosDelay + 100}
      >
        {title}
      </h1>
      <p className={cn(['text-secondary-text px-4 text-center sm:px-8 md:px-16'])} data-aos="fade-up" data-aos-delay={dataAosDelay + 200}>
        {description}
      </p>
    </div>
  );
}
