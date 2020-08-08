import React from "react"
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

/* importing custom modules*/
import Layout from "../components/layout"
import SEO from "../components/seo"
import Filter from "../components/CustomModules/Filter"
import ProductPage from "../components/CustomModules/productpage"
import Loader from '../components/CustomModules/loader'

/* importing css files */
import '../components/common/common.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function IndexPage(props) {
  const classes = useStyles();
  const [toShowLoader, setToShowLoader] = React.useState(false);

  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="blueColor alignCenter">Special X Launch Programs</h1>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={3} md={3}>
            <Filter toShowLoader={toShowLoader} />
          </Grid>
          <Grid item xs={12} sm={9} md={9}>
            <ProductPage toShowLoader={toShowLoader} setToShowLoader={setToShowLoader} uri={props.uri} />
          </Grid>
        </Grid>
        <Loader
          toShowLoader={toShowLoader}
          style={{ textAlign: 'center', marginLeft: '50%', marginTop: '50%' }}
        />
      </div>
    </Layout>
  )
}
