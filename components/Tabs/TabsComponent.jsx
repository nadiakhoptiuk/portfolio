import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Markdown from 'markdown-to-jsx';

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';

const TabsComponent = ({ data }) => {
  const [value, setValue] = useState(0);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [display, setDisplay] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    isMobile && setDisplay('block');
    !isMobile && setDisplay('flex');
  }, [isMobile]);

  return (
    <Box
      sx={{
        display: display,
        height: 'auto',
      }}
    >
      <Tabs
        orientation={isMobile ? 'horizontal' : 'vertical'}
        variant="scrollable"
        scrollButtons
        value={value}
        onChange={handleChange}
        aria-label="Tabs"
        classes={{ root: 'mainTabsRoot' }}
        indicatorColor="transparent"
        sx={{
          borderRight: 0,
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.2 },
          },
        }}
        centered={false}
      >
        {data?.map(oneTab => {
          return (
            <Tab
              key={oneTab.id}
              label={oneTab.tabName}
              className="rounded md:w-[100%]"
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

            <Scrollbars style={{ width: '100%', height: '374px' }} universal>
              <div className="prose pr-[10px] prose-p:mt-0 prose-p:text-small prose-p:font-light prose-p:not-italic prose-blockquote:text-small prose-blockquote:font-light prose-blockquote:leading-[28px] prose-li:mt-0 prose-li:text-small prose-li:font-light prose-li:text-black prose-li:marker:text-black md:w-[408px] md:prose-li:mb-2 xl:!w-[560px] xl:prose-p:text-middle xl:prose-p:font-normal xl:prose-p:leading-[28px]  xl:prose-blockquote:text-middle xl:prose-blockquote:font-normal xl:prose-blockquote:leading-[28px] xl:prose-li:mb-3 xl:prose-li:text-middle xl:prose-li:font-normal xl:prose-li:leading-[28px]">
                <Markdown>{oneTabPanel.description}</Markdown>
              </div>
            </Scrollbars>

            <span className="absolute bottom-0 right-0 text-little font-light md:text-small xl:font-normal">
              {oneTabPanel.date}
            </span>

            {oneTabPanel?.source && (
              <a
                href={oneTabPanel.source}
                rel="nofollow noreferrer noopener"
                target="_blank"
                className="absolute bottom-0 left-0 text-little font-light underline transition-colors hover:text-beige focus:text-beige md:text-small"
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
