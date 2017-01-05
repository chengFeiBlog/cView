/**
 * Created by chengfei on 2017/1/4.
 */
export default {
	bind () {
		this.documentHandler = (e) => {
			if (this.el.contains(e.target)) {
				return false;
			}
			if (this.expression) {
				this.vm[this.expression]();
			}
		};
		document.addEventListener('click', this.documentHandler);
	},
	update () {

	},
	unbind () {
		document.removeEventListener('click', this.documentHandler);
	}
};