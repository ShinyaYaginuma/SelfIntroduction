<template>
  <v-container>
    <h2>
      {{ msg }}
    </h2>
  </v-container>
</template>

<script>
export default {
  name: "AboutMe",
  props: {
    msg: String,
  },
};
</script>