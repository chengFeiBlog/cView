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
        <Row :gutter="20">
          <c-col :span="2">
            <Icon type="checkmark" size="20" color="red"></Icon>
          </c-col>
          <c-col :span="2">
            <Icon type="arrow-shrink" size="20" color="red"></Icon>
          </c-col>
          <c-col :span="2">
            <Icon type="checkmark-circled" size="20" color="red"></Icon>
          </c-col>
        </Row>
      </c-col>
    </Row>
    <Row>
      <c-col>
        <h1>三、按钮</h1>
        <Row :gutter="20">
          <c-col :span="2">
            <c-button>Default</c-button>
          </c-col>
          <c-col :span="2">
            <c-button type="primary">primary</c-button>
          </c-col>
          <c-col :span="2">
            <c-button type="ghost">ghost</c-button>
          </c-col>
          <c-col :span="2">
            <c-button type="dashed">dashed</c-button>
          </c-col>
          <c-col :span="2">
            <c-button type="text">text</c-button>
          </c-col>
          <c-col :span="2">
            <c-button type="primary" shape="circle" icon="ios-search">搜索</c-button>
          </c-col>
        </Row>
      </c-col>
    </Row>
    <Row>
      <c-col>
        <h1>四、输入组</h1>
        <Row :gutter="20">
          <c-col :span="4">
            <c-input type="textarea" @change="alert" @enter="alert()" @focus="alert()" @blur="alert()" value="test"
                     placeholder="请输入..."></c-input>
          </c-col>
          <c-col :span="4">
            <c-input type="textarea" @change="alert" v-model="hello" :rows="4" placeholder="请输入..."></c-input>
          </c-col>
          <c-col :span="4">
            <c-input>
              <span slot="prepend">http://</span>
              <span slot="append">.com</span>
            </c-input>
          </c-col>
          <c-col :span="4">
            <c-input icon="ios-clock-outline" placeholder="请输入..." style="width: 200px"></c-input>
          </c-col>
        </Row>
      </c-col>
    </Row>
    <Row>
      <c-col>
        <h1>五、radio</h1>
        <Row :gutter="20">
          <c-col :span="4">
            <Radio :checked="single">Radio</Radio>{{single}}
          </c-col>
        </Row>
      </c-col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {
        test: 'sss',
        hello: '222',
        single: false
      }
    },
    watch: {
      test() {
        console.log(this.test);
      },
      hello() {
        console.log(this.hello);
      }
    },
    methods: {
      alert() {
        console.log('ssss');
      }
    }
  }
</script>

<style lang="less">
  @import "../dist/styles/cview.css";

  .col {
    border: solid #2db7f5 1px;
  }
</style>
