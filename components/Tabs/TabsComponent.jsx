import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';
import Markdown from 'markdown-to-jsx';

const TabsComponent = ({ data }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        display: 'flex',
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        classes={{ root: 'mainTabsRoot' }}
        indicatorColor="transparent"
        sx={{
          borderRight: 0,
          width: '214px',
        }}
      >
        {data?.map(oneTab => {
          return <Tab key={oneTab.id} label={oneTab.tabName} />;
        })}
      </Tabs>

      {data?.map((oneTabPanel, index) => {
        return (
          <TabPanel key={oneTabPanel.id} value={value} index={index}>
            <p className="mb-6 text-big">{oneTabPanel.position}</p>

            <span className="absolute top-0 right-0 text-small">
              {oneTabPanel.date}
            </span>

            <p className="mb-6 text-small !text-navyBlue">
              {oneTabPanel.blueText}
            </p>

            <div className="prose prose-li:mb-3 prose-li:text-black prose-li:marker:text-black">
              <Markdown>{oneTabPanel.description}</Markdown>
            </div>
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default TabsComponent;
