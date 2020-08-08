import Grid from '@material-ui/core/Grid';
import { navigate } from "@reach/router";
import React from "react";
/* importing custom modules */
import Button from '../CustomModules/button.js';


const filterOptions = [
    {
        "heading": "Launch Year",
        "function": "applyYearFilter",
        "filterValue": ['2006', '2007', '2008', '2009', '2010',
            '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
    },
    {
        "heading": "Successful Launch",
        "function": "applyLaunchFilter",
        "filterValue": ['True', 'False']
    },
    {
        "heading": "Successful Landing",
        "function": "applyLandingFilter",
        "filterValue": ['True', 'False']
    }
];

const yearFilterParam = "&launch_year=";
const launchFilterParam = "&launch_success=";
const landingFilterParam = "&land_success=";

export default function Footer(props) {

    const [yearFilter, setYearFilter] = React.useState(null);
    const [launchFilter, setLaunchFilter] = React.useState(null);
    const [landingFilter, setLandingFilter] = React.useState(null);

    const applyYearFilter = (selectedFilter) => {
        setYearFilter(selectedFilter);
        var output = "";
        if (launchFilter != null) {
            output += launchFilterParam + launchFilter;
        }
        if (landingFilter != null) {
            output += landingFilterParam + landingFilter;
        }
        if (selectedFilter != null) {
            output += yearFilterParam + selectedFilter;
        }
        navigate(`${output}`);
    };
    const applyLaunchFilter = (selectedFilter) => {
        setLaunchFilter(selectedFilter);
        var output = "";
        if (selectedFilter != null) {
            output += launchFilterParam + selectedFilter;
        }
        if (landingFilter != null) {
            output += landingFilterParam + landingFilter;
        }
        if (yearFilter != null) {
            output += yearFilterParam + yearFilter;
        }
        navigate(`${output}`);

    };
    const applyLandingFilter = (selectedFilter) => {
        setLandingFilter(selectedFilter);
        var output = "";
        if (launchFilter != null) {
            output += launchFilterParam + launchFilter;
        }
        if (selectedFilter != null) {
            output += landingFilterParam + selectedFilter;
        }
        if (yearFilter != null) {
            output += yearFilterParam + yearFilter;
        }
        navigate(`${output}`);

    };

    return (
        <>
            {props.toShowLoader ? <div></div>
                :
                <div>
                    <h3>Filters</h3>
                    {filterOptions.map((index) => {
                        return (
                            <Grid xs={12} sm={12} md={12} className="marginBottom40">
                                <h3 className="alignCenter">{index["heading"]}</h3>
                                <Grid container className="alignCenter">
                                    {index["filterValue"].map((iCounter) => {
                                        return (
                                            <Grid item xs={6} sm={6} md={6}>
                                                {index["function"] === "applyYearFilter" ?
                                                    <Button value={iCounter}
                                                        onClick={() => applyYearFilter(iCounter)}
                                                    />
                                                    :
                                                    index["function"] === "applyLaunchFilter" ?
                                                        <Button value={iCounter}
                                                            onClick={() => applyLaunchFilter(iCounter.toLowerCase())}
                                                        />
                                                        :
                                                        <Button value={iCounter}
                                                            onClick={() => applyLandingFilter(iCounter.toLowerCase())}
                                                        />
                                                }
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                        )
                    })
                    }
                </div>
            }
        </>
    )
}