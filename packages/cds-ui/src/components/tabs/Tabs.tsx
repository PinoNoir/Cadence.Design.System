import { Icon } from '@iconify/react';
import clsx from 'clsx';
import React from 'react';
import * as styles from './Tabs.css';

export type TabItem = {
  /**
   * Unique id for the tab
   */
  id: string;

  /**
   * The value for the selected tab, if controlled
   */
  value?: string;

  /**
   * The value of the tab to select by default, if uncontrolled
   */
  defaultValue?: string;

  /**
   * A function called when a new tab is selected
   */
  onValueChange?: (value: string) => void;

  /**
   * Whether a tab is activated automatically or manually.
   * @defaultValue automatic
   * */
  activationMode?: 'automatic' | 'manual';

  /**
   * Specify the tab label
   */
  tabLabel: string;

  /**
   * Pass in children to be rendered within the Tab content area
   */
  tabContent: React.ReactNode;

  /**
   * Optionally specify a tab index
   */
  tabIndex?: number;

  /**
   * Optionally specify a default selected tab
   */
  defaultSelected?: boolean;

  /**
   * Optionally specify an automation id prefix for testing purposes
   */
  automationIdPrefix?: string;

  /**
   * Optionally specify an automation id for testing purposes
   */
  ['automation-id']?: string;

  /**
   * Optionally specify a custom CSS className
   */
  className?: string;
};

export type TabProps = {
  /**
   * Array of tab items
   */
  tabItems: TabItem[];
};

/** Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit. */
const Tabs: React.FC<TabProps> = ({ tabItems }) => {
  const defaultSelectedIndex = tabItems.findIndex((tab) => tab.defaultSelected);
  const initialTabIndex = defaultSelectedIndex !== -1 ? defaultSelectedIndex : 0;
  const [isOverflowing, setIsOverflowing] = React.useState(false);

  const checkForOverflow = () => {
    if (tabHeaderRef.current) {
      const isOverflow = tabHeaderRef.current.scrollWidth > tabHeaderRef.current.offsetWidth;
      setIsOverflowing(isOverflow);
    }
  };

  React.useEffect(() => {
    checkForOverflow();

    const handleResize = () => {
      checkForOverflow();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [activeTabIndex, setActiveTabIndex] = React.useState(initialTabIndex);
  const tabHeaderRef = React.useRef<HTMLDivElement>(null);

  const selectTab = (index: number) => {
    setActiveTabIndex(index);
  };

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabHeaderRef.current) {
      const containerWidth = tabHeaderRef.current.offsetWidth;
      const scrollWidth = tabHeaderRef.current.scrollWidth;
      const currentScroll = tabHeaderRef.current.scrollLeft;

      // Calculate the new scroll position
      let newScrollPosition = direction === 'left' ? currentScroll - containerWidth : currentScroll + containerWidth;

      // Clamp the new scroll position between 0 and the maximum scrollable width
      newScrollPosition = Math.max(0, Math.min(newScrollPosition, scrollWidth - containerWidth));

      tabHeaderRef.current.scrollLeft = newScrollPosition;
    }
  };

  return (
    <div className={styles.tabGroupContainer}>
      <div className={styles.tabGroup}>
        <div className={styles.tabBar}>
          <div className={styles.tabScroller}>
            <div className={styles.tabHeaders}>
              {isOverflowing && (
                <button className={styles.tabScrollArrows} onClick={() => scrollTabs('left')}>
                  <Icon icon="mdi:chevron-left" />
                </button>
              )}
              <div className={clsx(styles.tabScrollerScroll, styles.tabScrollerScrollArea)} ref={tabHeaderRef}>
                <div className={styles.tabScrollerScrollContent}>
                  <div className={styles.tabList}>
                    {tabItems.map((tab, index) => (
                      <button
                        key={index}
                        className={styles.tab}
                        aria-pressed={index === activeTabIndex ? 'true' : 'false'}
                        onClick={() => selectTab(index)}
                        tabIndex={tab.tabIndex}
                      >
                        {tab.tabLabel}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {isOverflowing && (
                <button className={styles.tabScrollArrows} onClick={() => scrollTabs('right')}>
                  <Icon icon="mdi:chevron-right" />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className={styles.contentContainer}>{tabItems.length > 0 && tabItems[activeTabIndex].tabContent}</div>
      </div>
    </div>
  );
};

export default Tabs;
