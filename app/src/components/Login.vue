<template>
<div class="d-flex justify-content-center align-items-center container h-100">
   <div class="row align-items-center h-100">
    <div class="col-md-12">
     <form class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Login</h1>
        <input type="email" id="inputEmail" class="form-control" placeholder="Seu email" required="" autofocus="">
        <input type="password" id="inputPassword" class="form-control mt-2" placeholder="Senha" required="">
        <button class="btn btn-lg btn-primary btn-block mt-3" type="submit">Login</button>
    </form>
    </div>
   </div>
</div>
</template>
<script>

export default {
    data(){
        return {
            user: '',
            password: ''
        }
    },methods:{
        login(){
            //TODO: call endpoint Login
        }
    }
}
    
</script>
<style>

</style>
