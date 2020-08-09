import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import WebIcon from '@material-ui/icons/Web';
import YouTubeIcon from '@material-ui/icons/YouTube';
import React from 'react';
import '../common/common.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 20,
    boxShadow: "10px 10px 5px grey"
  },
  media: {
    height: 0,
    paddingTop: '100.25%',
    backgroundColor: '#D3D3D3',
    margin: 10
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CardView(props) {
  const classes = useStyles();


  return (
    <Card className={classes.root} id="card" data-testid="button">
      <CardMedia
        className={classes.media}
        image={props.data["links"]["mission_patch"]}
        title={props.data["mission_name"]}
      />
      <CardHeader
        title={`${props.data["mission_name"]}# ${props.data["flight_number"]}`}
        className="sub-text"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <a href={props.data["links"]["article_link"]} target="_blank">
            <WebIcon />
          </a>
        </IconButton>
        <IconButton aria-label="share">
          <a href={props.data["links"]["video_link"]} target="_blank">
            <YouTubeIcon />
          </a>
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography paragraph id="text">
          {"Mission Ids:- " + props.data["mission_id"]}
        </Typography>
        <Typography paragraph>
          {"Launch Year:- " + props.data["launch_site"]["launch_year"]}
        </Typography>
        <Typography paragraph>
          {"Successful Launch:- " + props.data["launch_success"]}
        </Typography>
        <Typography paragraph>
          {"Rocket Type:- " + props.data["rocket"]["rocket_type"]}
        </Typography>
      </CardContent>
    </Card>
  );
}
