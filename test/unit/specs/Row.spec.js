/**
 * Created by chengfei on 2016/12/30.
 */
import Vue from 'vue'
import Row from 'src/components/layout/row'

describe('Row.vue', () => {
	it('should render correct contents', () => {
		const vm = new Vue({
			el: document.createElement('div'),
			render: (h) => h(Row)
		})
		expect(vm.$el.querySelector('.hello h1').textContent)
			.to.equal('Welcome to Your Vue.js App')
	})
})
