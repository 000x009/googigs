interface IProps {
  children: React.ReactNode;
  className?: string;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export function Text({ children, className, component = "span" }: IProps) {
  const Component = component;
  return <Component className={className}>{children}</Component>;
}
