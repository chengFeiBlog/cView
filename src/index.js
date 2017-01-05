/**
 * Created by chengfei on 2017/1/4.
 */
// es6 polyfill
import 'core-js/fn/array/find-index';

import Button from './components/button';
import Icon from './components/icon';
import { Row, Col } from './components/layout';

const cView = {
	ButtonGroup: Button.Group,
	cButton: Button,
	cCol: Col,
	Row,
	Icon
};

const install = function (Vue) {
	Object.keys(cView).forEach((key) => {
		"use strict";
		Vue.component(key, cView[key]);
	})
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

module.exports =  Object.assign(cView, {install});