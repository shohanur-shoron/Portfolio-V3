import * as React from "react";
import { motion } from "framer-motion";
import cn from '../../lib/utils';

type TabItemType = {
  id: string;
  label: string;
};

type PillTabsProps = {
  tabs?: TabItemType[];
  defaultActiveId?: string;
  onTabChange?: (id: string) => void;
  className?: string;
};

const MOCK_TABS: TabItemType[] = [
  { id: "all", label: "All" },
  { id: "ml", label: "ML" },
  { id: "web", label: "Web" },
  { id: "embedded", label: "Embedded" },
  { id: "research", label: "Research" },
];

const PillTabs = React.forwardRef<HTMLDivElement, PillTabsProps>(
  (props, ref) => {
    const {
      tabs = MOCK_TABS,
      defaultActiveId = tabs[0]?.id,
      onTabChange,
    } = props;

    const [activeTab, setActiveTab] = React.useState(defaultActiveId);

    const handleClick = React.useCallback(
      (id: string) => {
        console.log('Tab clicked:', id); // Debug log
        setActiveTab(id);
        onTabChange?.(id);
      },
      [onTabChange]
    );

    return (
      <div
        ref={ref}
        className={"flex items-center gap-3 p-2 rounded-lg border-0 z-30 outline-none"}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => handleClick(tab.id)}
            className={cn(
              "relative h-9 px-4 py-2 rounded-md transition cursor-pointer !outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 border-none inline-flex items-center justify-center",
              "text-sm font-medium",
              activeTab === tab.id
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="pill-tabs-active-pill"
                className="absolute inset-0 bg-primary rounded-md pointer-events-none"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
    );
  }
);

PillTabs.displayName = "PillTabs";

export default PillTabs;
