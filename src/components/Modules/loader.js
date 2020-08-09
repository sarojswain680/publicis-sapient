import React from "react";
import { CircularProgress } from '@material-ui/core';

export default class Loader extends React.Component {
   render() {
      return (
         <>
            {this.props.toShowLoader ?
               <CircularProgress
                  style={this.props.style}
               />
               :
               <></>
            }
         </>
      );
   }
}