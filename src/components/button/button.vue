<template>
    <button :type="htmlType" :class="classes" :disabled="disabled">
        <Icon class="cv-load-loop" type="load-c" v-if="loading"></Icon>
        <Icon :type="icon" v-if="icon && !loading"></Icon>
        <span v-if="showSlot" ref="slot"><slot></slot></span>
    </button>
</template>
<style>

</style>
<script>
	import Icon from '../icon';
	import {oneOf} from '../../utils/assist';
	const prefixCls = 'cv-btn';
	export default{
		components: {Icon},
		props: {
			// 颜色类型
			type: {
				validator(val) {
					return oneOf(val, ['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error']);
				}
			},
			// 按钮形状
			shape: {
				validator(val) {
					return oneOf(val, ['circle', 'circle-outline']);
				}
			},
			// size大小
			size: {
				validator(val) {
					return oneOf(val, ['small', 'large']);
				}
			},
			loading: Boolean,
			disabled: Boolean,
			htmlType: {
				default: 'button',
				validator(val) {
					return oneOf(val, ['button', 'submit', 'reset']);
				}
			},
			icon: String,
			long: {
				type: Boolean,
				default: false,
			}

		},
		data () {
			return {
				showSlot: true
			}
		},
		computed: {
			classes() {
				return [
					`${prefixCls}`,
					{
						[`${prefixCls}-${this.type}`]: !!this.type,
						[`${prefixCls}-${this.shape}`]: !!this.shape,
						[`${prefixCls}-long`]: this.long,
						[`${prefixCls}-${this.size}`]: !!this.size,
						[`${prefixCls}-loading`]: this.loading != null && this.loading,
						[`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || this.loading)
					}
				];
			}
		},
		mounted () {
            this.showSlot = this.$refs.slot.innerHTML !== '';
		}
	}
</script>
