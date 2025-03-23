
import { useState, useEffect } from "react";

import { Grid2, Tabs, Tab, Paper } from "@mui/material";

import { GlobalStyles } from "@config";

function Empty({ children = (<></>)}) {
    return children;
}

function Index(props) {

    const { tabPages = [], sx = {} } = props;

    const { HeadWrapper = Empty, BodyWrapper = Empty } = props;

    const style = {
        tabItem: {
            ...GlobalStyles.main
        },
        ...sx
    }

    const [tabIdx, setTabIdx] = useState(0);

    const handleChangeTab = (_, idx) => {
        setTabIdx(_ => idx);
    };

    const renderTab = ({ title = "", icon = (<></>) }, idx) => (
        <Tab key={`${title}-${idx}`} label={title} icon={icon} iconPosition="start" />
    )

    const renderTabItem = ({ element = (<></>) }, idx) => (
        <Grid2 key={`tabpanel-${idx}`} hidden={tabIdx !== idx} sx={style.tabItem}>
            {element}
        </Grid2>
    )

    return (
        <>
            <HeadWrapper>
                <Tabs value={tabIdx} onChange={handleChangeTab}>
                    {tabPages.map(renderTab)}
                </Tabs>
            </HeadWrapper>
            <BodyWrapper>
                {tabPages.map(renderTabItem)}
            </BodyWrapper>
        </>
    )
}

export default Index;