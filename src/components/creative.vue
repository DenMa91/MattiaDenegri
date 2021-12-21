<template>
  <section class="container mt-5">
      <div class="row align-items-center">
          <div class="col-12 col-md-6 image2 order-md-last">
            <img src="../assets/Designing.png" alt="" class="img-fluid">
          </div>
          <div class="col-12 col-md-6 p-5 text2 text-center">
              <h2 class="display-5 fw-bold">Creativo</h2>
              <p class="fs-4">amo la grafica digitale e il disegno</p>
              <p class="fs-4 fw-bold">i miei software preferiti?</p>
              <p class="fs-4">Photoshop e SketchBook!!!</p>
          </div>
      </div>
  </section>
</template>

<script>
import gsap from 'gsap'
export default {
  mounted() {
   gsap.fromTo('.image2', {x:300}, {x:0, ease: 'power2.out', duration:2})
   gsap.fromTo('.text2', {x:-300}, {x:0, ease: 'power2.out', duration:2})
  },
}
</script>

<style>

</style>