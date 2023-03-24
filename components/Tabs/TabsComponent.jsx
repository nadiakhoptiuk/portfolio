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
            <p>{oneTabPanel.position}</p>
            <span>{oneTabPanel.date}</span>
            <p>{oneTabPanel.blueText}</p>
            <div>
              <Markdown>{oneTabPanel.description}</Markdown>
            </div>
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default TabsComponent;
