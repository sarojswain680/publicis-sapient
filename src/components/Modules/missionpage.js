import React from "react"

/* importing custom modules */
import ServiceCall from '../common/service-call.js';
import MissionDetails from '../Modules/missiondetails';

export default class MissionPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productData: [],
            param: '',
            flag: true
        };
        this.fetchComments = this.fetchComments.bind(this);
    }

    fetchComments(param) {
        var parameter = param;
        if (parameter != null && parameter.length > 2) {
            parameter = parameter.substring(1, parameter.length);
        } else {
            parameter = "";
        }
        this.props.setToShowLoader(true);
        this.setState({ flag: true });
        ServiceCall('?limit=100' + parameter, 'GET', null, (result) => {
            this.setState({ productData: result, flag: false });
            this.props.setToShowLoader(false);
        },
            (error) => {
                this.setState({ flag: true });
                this.props.setToShowLoader(false);
                console.log(error);
            }
        );
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps);
        if (prevProps.uri !== this.props.uri) {
            this.fetchComments(this.props.uri);
        } else {
            return;
        }
    }

    componentDidMount() {
        this.fetchComments(this.props.uri);
    }

    render() {
        return (
            <div>
                {this.state.flag ?
                    <div></div>
                    :
                    <MissionDetails data={this.state.productData} />
                }
            </div>
        )
    }
}