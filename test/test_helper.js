import jsdom from 'jsdom';
import jquery from 'jquery';
import React from 'react'
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery'

// Set up testing env to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView;
const $ = jquery(global.window);

// build 'renderComponent' helper that should render a given react class
function renderComponent(Component, props, state) {
    const compInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}><Component {...props} /></Provider>
);
    return $(ReactDOM.findDOMNode(compInstance)); //produces HTML
}

// build helper for simulating events
$.fn.simulate = function(eName, value) {
    if(value) {
        this.val(value);
    }
    TestUtils.Simulate[eName](this[0])
}


// set up chai-jquery
chaiJquery(chai, chai.util, $ );

export {renderComponent, expect}