<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Modificar Titulo</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/" class="nav-link"> HOME </router-link>
          <router-link to="/nuestros-autos" class="nav-link"> Nuestros Autos </router-link>
          <router-link to="/contacto" class="nav-link"> Contacto </router-link>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" v-model="filter"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" v-on:click="buscar()">
              Buscar
            </b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    components: {
    },//components

    mounted(){
    },//mounted()

    data() {
      return {
      }
    },//data()

    methods: {
      buscar(){
        window.location.href = "/busqueda/" + this.filter
      }//buscar
    }//methods:
  }//export default
</script>