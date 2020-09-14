<template>
  <v-app>
    <super-view />
  </v-app>
</template>

<script>
  export default {
    name: 'SuperLayout',

    components: {
      SuperView: () => import('@/layouts/super/View'),
    },
  }
</script>
