<template>
  <div class="">
    <div class="row">
      <div v-for="auto in autosData" :key="auto.imagen" class="">
        <auto-card :autoParam="auto" />
      </div>
    </div>
  </div>
</template>

<script>
import Auto from "@/components/Auto.vue";
export default {
  name: "NuestrosAutos",
  props: [],
  components: {
    "auto-card": Auto,
  }, //components

  mounted() {
    this.getData();
  }, //mounted()

  data() {
    return {
      autosData: []
    };
  }, //data()

  methods: {
    async getData() {
      const res = await fetch("/data/json/autos.json");
      console.log(res);
      this.autosData = await res.json();
      console.log(this.autosData);
    },
  }, //methods:
}; //export default
</script>

<style>
/*Los estilos en CSS (o LESS o lo que sea)*/
</style>
