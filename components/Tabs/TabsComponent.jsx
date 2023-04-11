import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Markdown from 'markdown-to-jsx';
import { Scrollbars } from 'react-custom-scrollbars-2';
import TabPanel from './TabPanel';

const TabsComponent = ({ data }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: 'auto',
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
        }}
        centered={false}
      >
        {data?.map(oneTab => {
          return (
            <Tab
              key={oneTab.id}
              label={oneTab.tabName}
              className="w-[100%] rounded"
            />
          );
        })}
      </Tabs>

      {data?.map((oneTabPanel, index) => {
        return (
          <TabPanel key={oneTabPanel.id} value={value} index={index}>
            <p className="mb-6 font-playfair !font-semibold md:text-middle xl:text-big">
              {oneTabPanel.position}
            </p>

            <p className="mb-6 text-small !text-navyBlue xl:text-middle">
              {oneTabPanel.blueText}
            </p>

            <Scrollbars
              style={{ width: '100%', height: '224px' }}
              universal
              autoHide
              autoHideTimeout={1000}
              autoHideDuration={200}
            >
              <div className="prose prose-p:mt-0 prose-p:not-italic prose-blockquote:font-normal prose-li:mt-0 prose-li:text-black prose-li:marker:text-black md:w-[408px] md:prose-li:mb-2 xl:!w-[560px] xl:prose-li:mb-3">
                <Markdown>{oneTabPanel.description}</Markdown>
              </div>
            </Scrollbars>

            <span className="absolute bottom-0 right-0 text-small md:font-light">
              {oneTabPanel.date}
            </span>

            {oneTabPanel?.source && (
              <a
                href={oneTabPanel.source}
                rel="nofollow noreferrer noopener"
                target="_blank"
                className="absolute bottom-0 left-0 text-small underline md:font-light"
              >
                Source
              </a>
            )}
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default TabsComponent;
