<template>
  <div class="texto-centrado" style="padding:2px;">
    <div class="card card-auto" style="width: 150px;">
      <router-link :to="'/detalle-auto/' + getIndex()">
        <img
          :src="'/data/images/' + autoParam.imagen"
          class="card-img-top"
          alt="imagen de un auto"
        />
      </router-link>
      <div class="card-body">
        <h5 class="card-title" style="font-weight: bold">
          {{ autoParam.marca }}
        </h5>
        <p class="card-text">{{ autoParam.modelo }} {{ autoParam.anio }}</p>
        <p class="card-text" style="color: orangered">
          {{ this.getPrecio(autoParam.precio) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "Auto",
  props: ["autoParam"],
  components: {
    //HelloWorld
  },
  mounted() {
  },
  data() {
    return {
      
    }
  },
  methods: {
    getPrecio(precio) {
      if (precio === "0") {
        return "Consultar";
      } else {
        return "$" + new Intl.NumberFormat().format(precio);
      }
    },//getPrecio()
    getIndex(){
      return this.autoParam.imagen.replace(".jpg", "");
    }
  },
};
</script>

<style>
.texto-centrado {
  text-align: center;
}
</style>
