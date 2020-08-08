import React from "react"
import Grid from '@material-ui/core/Grid';

/* importing custom modules */
import ReviewCard from '../CustomModules/card';

export default class ProductPage extends React.Component{
render(){
return(
    <Grid container>
        {
        this.props.data && this.props.data.map((index)=>{
            return(
                <Grid item xs={12} sm={12} md={5} className="marginBottom40 marginRight40">
                    <ReviewCard data={index}/>
                </Grid>
            )
        })
        }
    </Grid>

)}
}