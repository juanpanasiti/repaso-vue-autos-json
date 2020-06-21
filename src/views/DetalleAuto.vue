<template>
  <div class="">
    <h1>
      {{ autoEncontrado.marca }} {{ autoEncontrado.modelo }} ({{
        autoEncontrado.anio
      }})
    </h1>

    <b-container fluid>
      <b-row>
        <br />
        <b-col cols="7" style="border-right: 1px solid #cecece">
          <div>
            <b-img
              :src="'/data/images/' + autoEncontrado.imagen"
              fluid
              alt="Fluid image"
              style="height: 300px"
              center
            />
          </div>
        </b-col>

        <b-col cols="5" style="padding-top: 20px">
          <h1>{{ autoEncontrado.marca }}</h1>
          <h2>{{ autoEncontrado.modelo }}</h2>
          <h4>Año: {{ autoEncontrado.anio }}</h4>

          <p>
            <strong>Localidad: </strong>
            {{ autoEncontrado.localidad }}
          </p>

          <p>
            <strong>Precio: </strong>
            {{ this.getPrecio(autoEncontrado.precio) }}
          </p>
          <br>
          <br>
          <br>
          <a href="javascript:history.go(-1)" class="btn btn-warning">
            Volver
          </a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "DetalleAuto",
  props: [],
  components: {}, //components

  mounted() {
    this.getAutoXId();
  }, //mounted()

  data() {
    return {
      autoEncontrado: [],
    };
  }, //data()

  methods: {
    async getAutoXId() {
      const parametroId = this.$route.params.id;
      const res = await fetch("/data/json/autos.json");
      const resJson = await res.json();
      this.autoEncontrado = await resJson.find(
        (auto) => auto.imagen.replace(".jpg", "") === parametroId
      );
    },
    getPrecio(precio) {
      if (precio === "0") {
        return "Consultar";
      } else {
        return "$ " + new Intl.NumberFormat().format(precio);
      }
    },
  }, //methods:
}; //export default
</script>

<style>
/*Los estilos en CSS (o LESS o lo que sea)*/
</style>
