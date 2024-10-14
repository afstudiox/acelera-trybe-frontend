import { ReactNode, AnchorHTMLAttributes } from "react";

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;  
}

function CustomLink({ children, target, rel, className, ...props }: CustomLinkProps) {
    const computedRel = target === '_blank' ? 'noopener noreferrer' : rel;
  return (
    <a 
      target={target} 
      rel={computedRel} 
      className={className}
      {...props}
      >
        {children}
    </a>
  )
}

export default CustomLink;