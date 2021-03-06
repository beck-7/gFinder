import React, { useState } from "react";
import { Typography, Box, Tabs, Tab } from "@material-ui/core";

import { Users } from "../users/Users";
import { Repos } from "../repos/Repos";

export const SearchTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Users" {...a11yProps(0)} />
        <Tab label="Repos" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0} style={{ padding: 0 }}>
        <Users />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Repos />
      </TabPanel>
    </>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      {...other}
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
    >
      {value === index && (
        <Box>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
};
