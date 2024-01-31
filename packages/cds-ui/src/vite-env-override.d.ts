// For CSS
declare module '*.module.css';

// For SCSS
declare module '*.module.scss';

// For Json
declare module '*.json';

// For image files
declare module '*.png' {
  const content: string;
  export default content;
}
declare module '*.jpg' {
  const content: string;
  export default content;
}
declare module '*.jpeg' {
  const content: string;
  export default content;
}
declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.gif';
