<template>
  <div class="home">
    <h1 id="titulo-home">A TODO MOTOR AUTOS</h1>
    <p id="descrip-home">
      Publicá sin registrarte y en un sólo paso. ¿Apurado por vender? Recibí
      ofertas en Efectivo de concesionarios registrados. ¡Súper!
    </p>
    <p id="destacados-home">
      Destacados
    </p>
    <div class="row container-fluid">
      <div v-for="auto in autosData" :key="auto.imagen" class="">
        <auto-card :autoParam="auto"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Auto from "@/components/Auto.vue";

export default {
  name: "Home",
  components: {
    "auto-card": Auto,
  },
  mounted() {
    this.getData();
  },
  data() {
    return {
      autosData: [],
    };
  },
  methods: {
    async getData() {
      const res = await fetch("data/json/autos.json");
      const resJson = await res.json();
      console.log(resJson);
      for(let auto of resJson){
        if(auto.destacado === 'Y'){
          this.autosData.push(auto);
        }
      }
    },
  },
};
</script>

<style>
#titulo-home {
  /*tipografía Verdana, tamaño 25px, en negritas, color rojo)*/
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 25px;
  font-weight: bold;
  color: red;
}

#descrip-home {
  /*(tipografía Verdana, tamaño 15px*/
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px !important;
}

#destacados-home {
  /*título tipografía Verdana, tamaño 15px, fondo color naranja, letras en blanco) */
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
  background-color: orangered;
  color: white;
  margin: 2px;
  padding-left: 10px;
  border-radius: 2px;
}
</style>
