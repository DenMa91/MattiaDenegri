<template>
  <section class="container mt-5">
      <div class="row align-items-center">
          <div class="col-12 col-md-6 image3">
            <img src="../assets/dev.png" alt="" class="img-fluid">
          </div>
          <div class="col-12 col-md-6 p-5 text-center text3">
              <h2 class="display-5 fw-bold">Rock 'N' Roll</h2>
              <p class="fs-4">Amo la musica e i concerti dal vivo!</p>
              <p class="fs-4 fw-bold">il mio genere preferito?</p>
              <p class="fs-4">senza ombra di dubbio il rock <i class="fas fa-guitar fa-2x"></i>!!!</p>
          </div>
      </div>
  </section>
</template>

<script>
import gsap from 'gsap'
export default {
  mounted() {
   gsap.fromTo('.image3', {x:-300}, {x:0, ease: 'power2.out', duration:2})
   gsap.fromTo('.text3', {x:300}, {x:0, ease: 'power2.out', duration:2})
  },
}
</script>

<style>

</style>