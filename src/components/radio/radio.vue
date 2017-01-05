<template>
    <label :class="warpClasses">
        <span :class="radioClasses">
            <span :class="innerClasses"></span>
            <input
                type="radio"
                :class="inputClasses"
                :disabled="disabled"
                :checked="selected"
                @change="change">
        </span><slot>{{value}}</slot>
    </label>
</template>
<script>
    const prefixCls = 'cv-radio';
    export default{
        props: {
        	  checked: {
        	  	  type: Boolean,
                default: false
            },
            disabled: {
        	  	  type: Boolean,
                default: false
            },
            value: {
        	  	  type: [String, Number]
            }
        },
        data(){
            return{
                selected: false,
                group: false
            }
        },
        computed: {
        	  warpClasses() {
        	  	  return [
        	  	  	  `${prefixCls}-wrapper`,
                    {
                    	  [`${prefixCls}-group-item`]: this.group,
                        [`${prefixCls}-wrapper-checked`]: this.selected,
                        [`${prefixCls}-wrapper-disabled`]: this.disabled
                    }
                ]
            },
            radioClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-checked`]: this.selected,
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ];
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            },
            inputClasses () {
                return `${prefixCls}-input`;
            }
        },
        methods: {
            change (event) {
                if (this.disabled) {
                   return false;
                }

                this.selected = event.target.checked;
                this.checked = this.selected;

                if (this.group && this.checked) {
                    this.$parent.change({
                        value: this.value,
                        checked: this.checked
                    });
                }
            },
            updateModel () {
                this.selected = this.checked;
            }
        }
    }
</script>
