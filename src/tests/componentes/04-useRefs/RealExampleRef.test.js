import React from 'react';
import { RealExample } from '../../../components/04-useRefs/RealExample';
import { shallow } from 'enzyme';


describe("pruebas en <RealExampleRef/>", ()=> {
  const wrapper = shallow(<RealExample/>)
  test('should show <RealExampleRef/>', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false)
  })
  
  test('should show <MultipleCustomHooks/>', () => {
    wrapper.find("button").simulate("click")
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true)
    
  })
  
  
})