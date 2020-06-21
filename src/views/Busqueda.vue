<template>
  <div class="">
    <h1>Búsqueda: {{ titulo }}</h1>
    <div class="row container-fluid">
      <div v-for="auto in autosData" :key="auto.imagen" class="">
        <auto-card :autoParam="auto"/>
      </div>
    </div>
  </div>
</template>

<script>
import Auto from "@/components/Auto.vue";
export default {
  name: "Busqueda",
  props: [],
  components: {
      "auto-card": Auto,
  }, //components

  mounted() {
    this.getData();
    this.setTitle();
  }, //mounted()

  data() {
    return {
      autosData: [],
      titulo: ''
    };
  }, //data()

  methods: {
    async getData() {
      const res = await fetch("/data/json/autos.json");
      const resJson = await res.json();
      const busqueda = "" + this.$route.params.filter.toLowerCase()
      for (let auto of resJson) {
        if (auto.marca.toLowerCase().includes(busqueda) || auto.modelo.toLowerCase().includes(busqueda) || auto.anio.toLowerCase().includes(busqueda)) {
          this.autosData.push(auto);
        }
      }
    },
    setTitle(){
        this.titulo = this.$route.params.filter
    }
  }, //methods:
}; //export default
</script>

<style></style>
