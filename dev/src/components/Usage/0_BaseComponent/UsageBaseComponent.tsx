import '@/reset.css';

export type UsageBaseComponentProps = {
  rootClassName?: string;
  titleClassName?: string;
  textClassName?: string;
  buttonClassName?: string;
  containerClassName?: string;
  containerChildrenClassName?: string;
};

export function UsageBaseComponent({
  rootClassName,
  titleClassName,
  textClassName,
  buttonClassName,
  containerClassName,
  containerChildrenClassName,
}: UsageBaseComponentProps) {
  return (
    <div className={rootClassName}>
      <h1 className={titleClassName}>This is a Title</h1>
      <p className={textClassName}>This is a Text</p>
      <div className={containerClassName}>
        This is a Container
        <p className={containerChildrenClassName}>Cotainer children 1</p>
        <p className={containerChildrenClassName}>Cotainer children 2</p>
        <p className={containerChildrenClassName}>Cotainer children 3</p>
      </div>
      <button className={buttonClassName}>This is a Button</button>
    </div>
  );
}
