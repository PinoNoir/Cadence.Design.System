import { Icon } from '@iconify/react';
import * as RadixToast from '@radix-ui/react-toast';
import { ToastImplPrivateProps } from '@radix-ui/react-toast';
import clsx from 'clsx';
import React, { ReactElement, ReactNode } from 'react';
import * as Styles from './Toast.css';
import { ToastVariants } from './Toast.css';

export interface ToastProps extends ToastImplPrivateProps {
  /**
   * Pass in children to be rendered within the Toast
   */
  children?: ReactNode;

  /**
   * additional className for Toast render
   */
  className?: string;

  /**
   * CSS variant of Toast(alert, success, error)
   */
  variant: ToastVariants['variant'];

  /**
   * Text content of Toast
   */
  content?: string;

  /**
   * Text to be displayed in toast description
   */
  message: string;

  /**
   * Additional Text to be displayed in toast description
   */
  additionalMessage?: string | null | undefined;

  /**
   * Header text for toast
   */
  header?: string;

  /**
   * URL for toast link text
   */
  url?: string;

  /**
   * Text for toast link
   */
  hyperlinkText?: string;

  /**
   * triggers when closing toast
   */
  onClose: () => unknown;

  /**
   * Additional trigger for closing toast
   */
  additionalOnClose?: (() => unknown) | null | undefined;

  /**
   * Additional trigger for opening toast
   */
  additionalShow?: boolean | null | undefined;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

const ToastProvider = RadixToast.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof RadixToast.Viewport>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Viewport>
>(({ className, ...props }, ref) => (
  <RadixToast.Viewport ref={ref} className={clsx(className, `${Styles.toastViewport}`)} {...props} />
));
ToastViewport.displayName = RadixToast.Viewport.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof RadixToast.Close>,
  React.ComponentPropsWithoutRef<typeof RadixToast.Close>
>(({ className, ...props }, ref) => <RadixToast.Close ref={ref} toast-close="" {...props}></RadixToast.Close>);
ToastClose.displayName = RadixToast.Close.displayName;

const Toast: React.FC<ToastProps> = ({ variant = 'alert', ...props }: ToastProps) => {
  function getHeaderText() {
    if (props.header) return props.header;
    switch (variant) {
      case 'alert':
        return 'Alert';
      case 'success':
        return 'Success';
      case 'error':
        return 'Error';
      default:
        return '';
    }
  }

  function getToast(toastBody: string, open: boolean, onClose: () => unknown) {
    return (
      <RadixToast.Root className={`${Styles.toastRoot}`} open={open} onOpenChange={onClose}>
        <div className={clsx(Styles.toastHeader, Styles.ToastRecipe({ variant }))}>
          <div className={`${Styles.iconContainer}`}>
            {icon}
            <span className={`${Styles.toastTitle}`}>{getHeaderText()}</span>
            <small>{props.content}</small>
          </div>
          <RadixToast.Close className={`${Styles.toastClose}`}>
            <Icon icon="mdi:close" />
          </RadixToast.Close>
        </div>
        <div className={`${Styles.toastDescription}`}>{toastBody}</div>
        <div className={`${Styles.toastLinks}`}>
          <a href={props.url}>{props.hyperlinkText}</a>
        </div>
      </RadixToast.Root>
    );
  }

  let icon: ReactElement = <></>;
  if (variant == 'alert') {
    icon = <Icon icon="mdi:information" fontSize="24px" color="#2A7AB7" />;
  } else if (variant == 'error') {
    icon = <Icon icon="mdi:alert-rhombus" fontSize="24px" color="#E12339" />;
  } else if (variant == 'success') {
    icon = <Icon icon="mdi:check-circle" fontSize="24px" color="#16A550" />;
  }
  return (
    <ToastProvider swipeDirection="right" data-qa="toast">
      {getToast(props.message, props.open, props.onClose)}
      {props.additionalMessage && props.additionalShow && props.additionalOnClose ? (
        getToast(props.additionalMessage, props.additionalShow, props.additionalOnClose)
      ) : (
        <></>
      )}
      <ToastViewport />
    </ToastProvider>
  );
};

export { Toast, ToastProvider };

/* This code could be useful in the future to extend toast functionality */

// const Toast = React.forwardRef<
//   React.ElementRef<typeof ToastPrimitives.Root>,
//   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & ToastVariants
// >(({ className, variant, ...props }, ref) => {
//   return (
//     <ToastPrimitives.Root
//       ref={ref}
//       {...props}
//     />
//   );
// });
// Toast.displayName = ToastPrimitives.Root.displayName;

// const ToastAction = React.forwardRef<
//   React.ElementRef<typeof ToastPrimitives.Action>,
//   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
// >(({ className, ...props }, ref) => (
//   <ToastPrimitives.Action
//     ref={ref}
//     className={clsx(`${Styles.toastAction}`, className)}
//     {...props}
//   />
// ));
// ToastAction.displayName = ToastPrimitives.Action.displayName;

// type ToastActionElement = React.ReactElement<typeof ToastAction>;
