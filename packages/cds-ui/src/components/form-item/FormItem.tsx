import clsx from 'clsx';
import { formItem } from './FormItem.css';

export interface FormItemProps {
  /**
   * Pass in content that will be rendered within the FormItem component
   */
  children?: React.ReactNode;

  /**
   * Specify a custom className
   */
  className?: string;

  /**
   * Specify a custom automation id for testing purposes
   */
  ['automation-id']?: string;
}

const FormItem: React.FC<FormItemProps> = ({ className, children }) => {
  const classNames = clsx(`${formItem}`, className);

  return <div className={classNames}>{children}</div>;
};

export default FormItem;
