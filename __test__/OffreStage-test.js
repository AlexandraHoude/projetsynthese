import React from 'react';
import {shallow} from 'enzyme';
import OffreStage from '/src/component/Admin/OffreStage';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandPointDown} from "@fortawesome/free-solid-svg-icons";

it.skip("renders without crashing", () => {
    shallow(<OffreStage />);
});

it("renders offre de stage page", () => {
    const wrapper = shallow(<OffreStage />);
    const title = <h2>Offre de stage <FontAwesomeIcon icon={faHandPointDown}/></h2>;
    expect(wrapper.contains(title)).toEqual(true);
});
