import React from 'react';
import {shallow} from 'enzyme';
import DemandeStage from '/src/component/Admin/DemandeStage';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandPointDown} from "@fortawesome/free-solid-svg-icons";

it.skip("renders without crashing", () => {
    shallow(<DemandeStage />);
});

it("renders Demande de stage page", () => {
    const wrapper = shallow(<DemandeStage />);
    const title = <h2>Demandes de stage <FontAwesomeIcon icon={faHandPointDown}/></h2>;
    expect(wrapper.contains(title)).toEqual(true);
});
