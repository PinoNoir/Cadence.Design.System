import { Divider, Link } from '../../components';
import Azure from '../assets/images/azure.svg';
import Confluence from '../assets/images/confluence.svg';
import Figma from '../assets/images/figma.svg';
import bg from '../assets/images/stretto-bg.png';
import Zeroheight from '../assets/images/zeroheight.svg';
import * as styles from './Welcome.css';

export const Welcome = () => {
  return (
    <div
      className={`${styles.mainContainer}`}
      style={{
        background: `url(${bg}) no-repeat center center fixed`,
        backgroundSize: 'cover',
      }}
    >
      <div className={`${styles.content}`}>
        <h1>Welcome to Cadence Design System</h1>
        <h2>React Component Library</h2>
        <Divider color="onDark" thickness="medium" />
        <p>
          Here you can find our design guidelines, component documentation, and resources for building apps with
          Stretto&apos;s design system.
        </p>
        <p>
          Browse available components by navigating the sidebar. The Stretto Design System team follows a &nbsp;
          <Link className={`${styles.link}`} href="https://componentdriven.org" target="_blank">
            component-driven
          </Link>
          &nbsp; process starting with primitives or atomic components and will eventually be extended into more complex
          layouts and pages. All components are built in React and Typescript to ensure type safety.
        </p>
        <div className={`${styles.subheading}`}>Internal Resources</div>
        <div className={`${styles.linkList}`}>
          <div className={`${styles.linkItem}`}>
            <Link
              href="https://www.figma.com/file/UZTuFFY4hW0LryuLjnEEcQ/BCC-Components?type=design&node-id=223%3A2&mode=design&t=ssZmpcPbnNb1cMy0-1"
              target="_blank"
            >
              <img src={Figma} alt="figma" />
              Figma Library
            </Link>
            <p>Visit Stretto&apos;s Figma component library for visual references.</p>
          </div>
          <div className={`${styles.linkItem}`}>
            <Link href="https://zeroheight.com/5be798578/p/07b4ba-welcome-to-cds" target="_blank">
              <img src={Zeroheight} alt="zeroheight" />
              Zeroheight
            </Link>
            <p>Visit our internal docs site for component specs & implementation guides.</p>
          </div>
          <div className={`${styles.linkItem}`}>
            <Link
              href="https://teamlink.stretto.com/pages/viewpage.action?spaceKey=CDS&title=Cadence+Design+System+Home"
              target="_blank"
            >
              <img src={Confluence} alt="confluence" />
              Confluence
            </Link>
            <p>Visit our official Confluence page for updates and other helpful content.</p>
          </div>
          <div className={`${styles.linkItem}`}>
            <Link href="https://devops.corp.stretto.com/DefaultCollection/Cadence%20Design%20System" target="_blank">
              <img src={Azure} alt="azure" />
              Azure Devops
            </Link>

            <p>Head over to our repository in Azure devops to review the source code.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
