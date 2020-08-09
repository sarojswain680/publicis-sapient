import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Card from '../src/components/Modules/card';

Enzyme.configure({ adapter: new Adapter() })

afterEach(cleanup)


it("renderers card without crashing", () => {

    const data = {
        links: {
            mission_patch: "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
            article_link: "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
            video_link: "https://www.youtube.com/watch?v=0a_00nJ_Y88",
        },
        mission_name: "FalconSat",
        flight_number: 1,
        launch_success: false,
        mission_id: "EEBBJUEE",
        launch_site: {
            launch_year: "2006",
        },
        rocket: { rocket_type: "Merlin A" }
    }

    const wrapper = shallow(<Card data={data} />);
    const root = wrapper.find('#text')
    expect(root.first().text()).toEqual('Mission Ids:- EEBBJUEE')
})

it("matches snapshot", () => {
    const data = {
        links: {
            mission_patch: "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
            article_link: "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
            video_link: "https://www.youtube.com/watch?v=0a_00nJ_Y88",
        },
        mission_name: "FalconSat",
        flight_number: 1,
        launch_success: false,
        mission_id: "EEBBJUEE",
        launch_site: {
            launch_year: "2006",
        },
        rocket: { rocket_type: "Merlin A" }
    }
    const tree = renderer.create(<Card data={data}></Card>).toJSON();

    expect(tree).toMatchSnapshot();
})
