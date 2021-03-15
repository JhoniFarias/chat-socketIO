<template>
<div class="d-flex justify-content-center align-items-center container h-100">
   <div class="row justify-content-center align-items-center h-100 w-100">
   <div class="col-md-6">
   <img src="https://blog.bsource.com.br/assets/img/programador.gif" class="img-fluid rounded" alt="Cinque Terre">
   </div>
    <div class="col-md-6">
     <form class="form-signin">
        <h1 class="h3 font-weight-normal text-center text-secondary" style="font-style: oblique;"><strong>Chat via Socket</strong></h1>
        <input type="text" id="inputEmail" class="form-control" placeholder="Nome de usuario" required="" autofocus="" v-model="user">
        <input type="password" id="inputPassword" class="form-control mt-2" placeholder="Senha" required="" v-model="password">
        <input type="button" class="btn btn-outline-primary btn-block mt-3" value="Enviar" @click="login()" />
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
        //autententicação para testes
        //autenticação comentada para poder utilizar o sistema sem fazer login
        login(){
            fetch('http://localhost:8082/authenticate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: this.user,
                passwd: this.password
                })
            }).then(res => res.json())
            .then(res => console.log(res));

            //this.$emit("authenticated", true);
            //this.$router.replace({ name: "chat" });
        }
    }
}
    
</script>
<style>

</style>
