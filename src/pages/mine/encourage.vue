<template>
    <div>
  
    </div>
  </template>
  <script>
    import {MessageBox} from "mint-ui"
    export default {
      mounted() {
        MessageBox.alert('尚在开发，请返回').then(action => {
          this.$router.push({name: "mine"});
        });
      }
    }
  
  </script>
  <style>
  
  </style>
  