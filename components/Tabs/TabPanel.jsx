import Box from '@mui/material/Box';

const TabPanel = props => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className="w-full"
    >
      {value === index && <Box className="relative pl-[100px]">{children}</Box>}
    </div>
  );
};

export default TabPanel;
