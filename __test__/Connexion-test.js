import React from 'react';
import {shallow} from 'enzyme';
import Connexion from '/src/component/Public/Connexion';

it.skip("renders without crashing", () => {
    shallow(<Connexion />);
});

it("renders connexion page", () => {
    const wrapper = shallow(<Connexion />);
    const title = <h3>Identification</h3>;
    expect(wrapper.contains(title)).toEqual(true);
});
