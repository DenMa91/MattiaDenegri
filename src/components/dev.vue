<template>
  <section class="container mt-5">
      <div class="row align-items-center">
          <div class="col-12 pt-4 text-center">
            <h2 class="display-3">Chi Sono</h2>
          </div>
          <div class="col-12 col-md-6 image">
            <img src="../assets/dev.png" alt="" class="img-fluid">
          </div>
          <div class="col-12 col-md-6 p-5 text-center text">
              <h2 class="display-5 fw-bold">Developer</h2>
              <p class="fs-4">sono un Junior fullstack developer appassionato di coding!!!</p>
              <p class="fs-4 fw-bold">il mio sogno ?</p>
              <p class="fs-4">rendere un lavoro la mia passione!!!</p>
          </div>
      </div>
  </section>
</template>

<script>
import gsap from 'gsap'
export default {
  mounted() {
   gsap.fromTo('.image', {x:-300}, {x:0, ease: 'power2.out', duration:2})
   gsap.fromTo('.text', {x:300}, {x:0, ease: 'power2.out', duration:2})
  },
}
</script>

<style>

</style>