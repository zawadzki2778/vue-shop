<template>
  <div class="v-catalog"></div>
  <h1>Catalog</h1>
  <v-catalog-item />
</template>

<script>
import vCatalogItem from './v-catalog-item.vue';

export default {
    name: "v-catalog",
    components: {
        vCatalogItem
    },
};
</script>

<style>

</style>