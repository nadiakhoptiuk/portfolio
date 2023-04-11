import Box from '@mui/material/Box';

const TabPanel = props => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className="relative w-full md:pt-[10px] xl:pt-[20px]"
    >
      {value === index && (
        <Box className="!h-[100%] md:w-[428px] xl:w-[479px]">{children}</Box>
      )}
    </div>
  );
};

export default TabPanel;
