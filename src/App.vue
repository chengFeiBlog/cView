<template>
    <div id="app">
        <h1>一栅格</h1>
        <Row :gutter="20">
            <cv-col :span="4" class="col"> col</cv-col>
            <cv-col :span="4" class="col"> col</cv-col>
            <cv-col :span="4" class="col"> col</cv-col>
            <cv-col :span="4" class="col"> col</cv-col>
            <cv-col :span="4" class="col"> col</cv-col>
            <cv-col :span="4" class="col"> col</cv-col>
        </Row>

    </div>
</template>

<script type="text/ecmascript-6">
	import {Row, CvCol} from './components/layout'
	export default {
		name: 'app',
		components: {
			Row, CvCol
		}
	}
</script>

<style lang="less">
    @import "cStyles/index.less";

    .col {
        border: solid #2db7f5 1px;
    }
</style>
