<template>
    <i :class="classes" :style="styles"></i>
</template>
<script>
	const prefixCls = 'cv-icon';
	export default{
		props: {
			// 图标名称
			type: String,
			// 图标大小
			size: [Number, String],
			// 图标颜色
			color: String
		},
		computed: {
			classes() {
				return `${prefixCls} ${prefixCls}-${this.type}`;
			},
			styles() {
				let style = {};
				if (this.size) {
					style['font-size'] = `${this.size}px`;
				}
				if (this.color) {
					style.color = this.color;
				}
				return style
			}
		}
	}
</script>
