<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org"
         target="_blank"
         rel="noopener">vue-cli documentation</a>.
    </p>
    <icon-svg iconClass="jian"></icon-svg>
    <svg>
      <use xlink:href="#jian" />
    </svg>
  </div>
</template>

<script>
import { debounce } from '@/common/js/common.js'
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    this.login()

    debounce(function () { console.log('debounce') }, 500, true)()
  },
  methods: {
    async login() {
      try {
        let res = await this.$api.user.login({
          userName: "123",
          password: "123"
        })
        console.log(res);

      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
