declare module 'react' {
  interface HTMLAttributes<T> {
    'automation-id'?: string;
  }
}

export default interface CdsComponentProps {
  className?: string;
  'automation-id'?: string;
  id?: string;
}
