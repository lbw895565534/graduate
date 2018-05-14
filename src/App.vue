<template>
  <div id="app">
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive">
        </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">

    </router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>
<style>
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  position: absolute;
}
i {
  font-size: 20px !important;
}

</style>
