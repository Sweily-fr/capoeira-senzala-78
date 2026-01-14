import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  paddingY?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
}

export function SectionWrapper({ 
  children, 
  className,
  paddingY = '2xl' // default to 2xl (py-32)
}: SectionWrapperProps) {
  const paddingClasses = {
    'sm': 'py-16',
    'md': 'py-20',
    'lg': 'py-24',
    'xl': 'py-28',
    '2xl': 'py-32',
    'none': ''
  };

  return (
    <section className={cn(
      'w-full',
      paddingClasses[paddingY],
      className
    )}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
