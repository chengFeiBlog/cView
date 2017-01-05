<template>
    <div id="app">
        <Row>
            <c-col>
                <h1>一、栅格</h1>
                <Row :gutter="20">
                    <c-col :span="4" class="col"> col</c-col>
                    <c-col :span="4" class="col"> col</c-col>
                    <c-col :span="4" class="col"> col</c-col>
                    <c-col :span="4" class="col"> col</c-col>
                    <c-col :span="4" class="col"> col</c-col>
                    <c-col :span="4" class="col"> col</c-col>
                </Row>

            </c-col>
        </Row>
        <Row>
            <c-col>
                <h1>二、图标</h1>
                <Row>
                    <c-col>
                        <Icon type="checkmark" size="20" color="red"></Icon>
                    </c-col>
                </Row>
            </c-col>
        </Row>
        <Row>
            <c-col>
                <h1>三、按钮</h1>
                <Row>
                    <c-col>
                        <c-button type="default">默认按钮</c-button>
                        <c-button type="primary">主要按钮</c-button>
                        <c-button type="text">文字按钮</c-button>
                    </c-col>
                </Row>
            </c-col>
        </Row>
    </div>
</template>

<script type="text/ecmascript-6">
	export default {
		name: 'app'
	}
</script>

<style lang="less">
    @import "styles/index.less";

    .col {
        border: solid #2db7f5 1px;
    }
</style>
