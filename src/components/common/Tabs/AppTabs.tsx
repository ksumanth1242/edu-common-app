import React from 'react';
import { Tab, TabContainer } from './tab-components';

interface TabCount {
  label: string;
  value: number;
}

interface AppTabsProps {
  selectedLabel?: string;
  onClick: (label: string) => void;
  labels?: string[];
  count?: TabCount[];
  type?: 'primary' | 'secondary' | 'custom-yellow' | 'BlueColor' | 'header';
  theme?: string;
  className?: string;
  isDisabled?: boolean;
}

export default function AppTabs({
  selectedLabel,
  onClick,
  labels,
  type,
  count,
  theme,
  className,
  isDisabled,
}: AppTabsProps) {
  return (
    <TabContainer type={type} className={className}>
      {labels && labels.length
        ? labels.map((label: string, index: number) => (
            <Tab
              isDisabled={isDisabled}
              theme={theme}
              type={type}
              key={`${label}-${index}`}
              style={
                labels && labels.length !== 1
                  ? { width: `calc(100% / ${labels.length})` }
                  : {}
              }
              isSelected={selectedLabel === label}
              onClick={() => onClick(label)}
            >
              {label}
              {count &&
                ' (' +
                  count.find((c: TabCount) => c.label === label)?.value +
                  ')'}
            </Tab>
          ))
        : ''}
    </TabContainer>
  );
}
