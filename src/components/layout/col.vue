<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
	const prefixCls = 'cv-col';
	export default{
		props: {
			// 栅格占据的列数
			span: [Number, String],
			// 栅格的顺序，在flex布局模式下有效
			order: [Number, String],
			// 栅格左侧的间隔格数
			offset: [Number, String],
			// 栅格向右移动格数
			push: [Number, String],
			// 栅格向左移动格数
			pull: [Number, String],
			// 自定义
			className: String,
			//  <768
			xs: [Number, Object],
			// >=768
			sm: [Number, Object],
			// >=992
			md: [Number, Object],
			// >1200
			lg: [Number, Object]
		},
		computed: {
			gutter() {
				return this.$parent.gutter || 0;
			},
			classes() {
				let classList = [
					`${prefixCls}`,
					{
						[`${prefixCls}-span-${this.span}`]: this.span,
						[`${prefixCls}-order-${this.order}`]: this.order,
						[`${prefixCls}-offset-${this.offset}`]: this.offset,
						[`${prefixCls}-push-${this.push}`]: this.push,
						[`${prefixCls}-pull-${this.pull}`]: this.pull,
						[`${this.className}`]: !!this.className
					}
				];
				['xs', 'sm', 'md', 'lg'].forEach(size => {
					if (typeof this[size] === 'number') {
						classList.push(`${prefixCls}-span-${size}-${this[size]}`)
					} else if (typeof this[size] === 'object') {
						let props = this[size];
						Object.keys(props).forEach((prop) => {
							classList.push(
								prop == 'span'
									? `${prefixCls}-${size}-${prop}-${props[prop]}`
									: `${prefixCls}-span-${size}-${props[prop]}`
							);
						});
					}
				});
				return classList;
			},
			styles() {
				let style = {};
				if (this.gutter !== 0) {
					style.paddingLeft = this.gutter / 2 + 'px';
					style.paddingRight = style.paddingLeft;
				}
				return style;
			}
		}
	}
</script>
