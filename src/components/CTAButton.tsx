
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CTAButton = ({ 
  href, 
  children, 
  variant = 'primary', 
  icon, 
  className,
  onClick 
}: CTAButtonProps) => {
  const baseStyles = "flex items-center justify-center font-medium transition-all";
  
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:brightness-110 active:scale-95",
    secondary: "bg-secondary border border-border hover:bg-secondary/80",
    outline: "border border-border text-foreground hover:bg-secondary"
  };
  
  const sizeStyles = "px-6 py-3 rounded-lg";
  
  return (
    <Link
      to={href}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles,
        className
      )}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon || variant === 'primary' ? (
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      ) : null}
    </Link>
  );
};

export default CTAButton;
