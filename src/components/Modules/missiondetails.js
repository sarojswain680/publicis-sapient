import React from "react"
import Grid from '@material-ui/core/Grid';

/* importing custom modules */
import ReviewCard from '../Modules/card';

export default class MissionDetailsPage extends React.Component {
    render() {
        return (
            <Grid container>
                {
                    this.props.data && this.props.data.map((index) => {
                        return (
                            <Grid item xs={5} sm={5} md={3} className="marginBottom40 marginRight40">
                                <ReviewCard data={index} />
                            </Grid>
                        )
                    })
                }
            </Grid>

        )
    }
}