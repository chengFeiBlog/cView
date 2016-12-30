<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
	import {oneOf} from '../../utils/assist';
	const prefixCls = 'cv-row';
	export default{
		props: {
			// 栅格间距
			gutter: {
				type: Number,
				default: 0
			},
			// 布局模式
			type: {
				validator(value) {
					return oneOf(value, ['flex'])
				}
			},
			// flex 布局下的垂直对齐方式
			align: {
				validator (value) {
					return oneOf(value, ['top', 'middle', 'bottom']);
				}
			},
			// flex 布局下的水平对其模式
			justify: {
				validator (value) {
					return oneOf(value, ['start', 'end', 'center', 'space-around', 'space-between']);
				}
			},
			className: String
		},
		computed: {
			classes () {
				return [{
					[`${prefixCls}`]: !this.type,
					[`${prefixCls}-${this.type}`]: !!this.type,
					[`${prefixCls}-${this.type}-${this.align}`]: !!this.align,
					[`${prefixCls}-${this.type}-${this.justify}`]: !!this.justify,
					[`${this.className}`]: !!this.className,

				}]
			},
			styles () {
				let style = {};
				if (this.gutter !== 0) {
					style.marginLeft = `-${this.gutter / 2}px`;
					style.marginRight = style.marginLeft;
				}
				return style;
			}
		}
	}
</script>
