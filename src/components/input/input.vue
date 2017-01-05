<template>
    <div :class="classes">
        <template v-if="type !== 'textarea'">
            <div :class="[prefixCls + '-group-prepend']" v-if="prepend" v-show="slotReady" ref="prepend">
                <slot name="prepend"></slot>
            </div>
            <i class="cv-icon" :class="['cv-icon-' + icon, prefixCls + '-icon']" v-if="icon"
               @click="handleIconClick"></i>
            <input
                    ref="input"
                    :type="type"
                    :class="inputClasses"
                    :placeholder="placeholder"
                    :disabled="disabled"
                    :maxlength="maxlength"
                    :readonly="readonly"
                    :name="name"
                    :value="value"
                    @input="updateValue($event.target.value)"
                    @keyup.enter="handleEnter"
                    @focus="handleFocus"
                    @blur="handleBlur"
                    @change="handleChange">
            <div :class="[prefixCls + '-group-append']" v-if="append" v-show="slotReady" ref="append">
                <slot name="append"></slot>
            </div>
        </template>
        <textarea
                v-else
                ref="textarea"
                :class="textareaClasses"
                :style="textareaStyles"
                :placeholder="placeholder"
                :disabled="disabled"
                :rows="rows"
                :maxlength="maxlength"
                :readonly="readonly"
                :name="name"
                :value="value"
                @input="updateValue($event.target.value)"
                @keyup.enter="handleEnter"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange">
        </textarea>
    </div>
</template>
<script>
	import {oneOf} from '../../utils/assist';
	import calcTextareaHeight from '../../utils/calcTextareaHeight';
	const prefixCls = 'cv-input';
	export default{
		props: {
			// 输入类型
			type: {
				validator(val) {
					return oneOf(val, ['text', 'textarea', 'password']);
				}
			},
			value: {
				type: [String, Number],
				default: ''
			},
			size: {
				validator(val) {
					return oneOf(val, ['small', 'large']);
				}
			},
			placeholder: {
				type: String,
				default: ''
			},
			maxlength: {
				type: Number
			},
			disabled: {
				type: Boolean,
				default: false
			},
			icon: String,
			//  自适应内容高度{ minRows: 2, maxRows: 6 }
			autosize: {
				type: [Boolean, Object],
				default: false
			},
			rows: {
				type: Number,
				default: 2
			},
			readonly: {
				type: Boolean,
				default: false
			},
			name: {
				type: String
			}
		},
		computed: {
			classes() {
				return [
					`${prefixCls}-wrapper`,
					{
						[`${prefixCls}-wrapper-${this.size}`]: !!this.size,
						[`${prefixCls}-type`]: this.type,
						[`${prefixCls}-group`]: this.prepend || this.append,
						[`${prefixCls}-group-${this.size}`]: (this.prepend || this.append) && !!this.size
					}
				]
			},
			inputClasses() {
				return [
					`${prefixCls}`,
					{
						[`${prefixCls}-${this.size}`]: !!this.size,
						[`${prefixCls}-disabled`]: this.disabled
					}
				];
			},
			textareaClasses() {
				return [
					`${prefixCls}`,
					{
						[`${prefixCls}-disabled`]: this.disabled
					}
				]
			}
		},
		data(){
			return {
				prefixCls: prefixCls,
				prepend: true,
				append: true,
				slotReady: false,
				textareaStyles: {}
			}
		},
		methods: {
			handleEnter () {
				this.$emit('enter');
			},
			handleIconClick () {
				this.$emit('click');
			},
			handleFocus () {
				this.$emit('focus');
			},
			handleBlur () {
				this.$emit('blur');
			},
			handleChange (event) {
				this.$emit('change', event);
			},
			updateValue (val) {
				let formattedValue = val.trim();
				this.$emit('input', formattedValue);
            },
			resizeTextarea () {
				const autosize = this.autosize;
				if (!autosize || this.type !== 'textarea') {
					return false;
				}

				const minRows = autosize.minRows;
				const maxRows = autosize.maxRows;

				this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
			}
		},
		watch: {
			value() {
				this.$nextTick(() => {
					this.resizeTextarea();
				});
			}
		},
		mounted() {
			if (this.type !== 'textarea') {
				this.prepend = this.$refs.prepend.innerHTML !== '';
				this.append = this.$refs.append.innerHTML !== '';
			} else {
				this.prepend = false;
				this.append = false;
			}
			this.slotReady = true;
			this.resizeTextarea();
		}
	}
</script>
