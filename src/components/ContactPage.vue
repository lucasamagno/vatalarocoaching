<template>
  <div class="asana-embed-container">
    <div class="responsive-iframe-container">
      <iframe class="asana-embed-iframe" src="https://form.asana.com/?k=sCaIxNnJY_UyeR42D7YLCw&d=1201846958216343&embed=true" frameborder="0"></iframe>
    </div>
    <div class="asana-embed-footer">
      <a rel="nofollow noopener" target="_blank" class="asana-embed-footer-link" href="https://asana.com/?utm_source=embedded_form">
        <div class="asana-embed-footer-logo" role="img" aria-label="Logo of Asana"></div>
      </a>
    </div>
  </div>
</template>

<script setup> 

</script>

<style scoped>
.responsive-iframe-container {
  position: relative;
  width: 100%;
  padding-top: 180%; /* Increased to accommodate the form's height */
}
.asana-embed-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.asana-embed-container {
  max-width: 800px; /* Adjust the max-width as needed */
  margin: auto; /* Center the form container */
}
</style>
