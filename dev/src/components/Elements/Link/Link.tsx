export type LinkProps = {
  children: React.ReactNode;
};

export function Link({ children }: LinkProps) {
  return <a>{children}</a>;
}
