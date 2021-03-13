<template>
    <router-view @authenticated="setAuthenticated"></router-view>
</template>
<script>
  import { routes } from './routes.js'
  export default {
    data(){
      return {
       authenticated : false,
       routes,
      }
    },mounted(){
       if(!this.authenticated)
           this.$router.replace({ name: "login" });
    },
    methods: {
        setAuthenticated(isAutenticated) {
            this.authenticated = isAutenticated;
        }
    }
  };
</script>
<style>
body{
  height: 95vh;
}
</style>

