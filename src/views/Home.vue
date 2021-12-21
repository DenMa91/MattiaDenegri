<template>
  <section class="container" @scroll="scrollUp">
    <div class="row align-items-center justify-content-center">
      <div class="col-12 d-flex justify-content-center align-items-center flex-column vh-100">
        <img class="img-fluid logo" src="../assets/logobk.png" alt="logo Mattia Denegri">
      <span class="arrowDown mt-5">
        <i class="fas fa-chevron-down fa-5x"></i>
      </span>
      </div>
    </div>
  </section>
  <transition-group
    enter-active-class="animated slideInUp"
    leave-active-class="animated slideOutDown">
  <skills v-if="scroll > 200"/>
  <dev v-if="scroll > 800"/>
  <creative v-if="scroll > 1300"/>
  <rock v-if="scroll > 1800"/>
  </transition-group>
  <div class="vh-1000"></div>
</template>


<script>
import Skills from '../components/skills.vue'
import dev from '../components/dev.vue'
import creative from '../components/creative.vue'
import rock from '../components/rock.vue'
import gsap from 'gsap'

export default {
  components:{Skills, dev, creative, rock},
  data() {
    return {
      skills:[
        {name: 'HTML5', icon: '<i class="fab fa-html5"></i>'},
        {name: 'CSS3', icon: '<i class="fab fa-css3-alt"></i>'},
        {name: 'Bootstrap', icon: '<i class="fab fa-bootstrap"></i>'},
        {name: 'JavaScript', icon: '<i class="fab fa-js"></i>'},
        {name: 'VueJS', icon: '<i class="fab fa-vuejs"></i>'},
        {name: 'PHP', icon: '<i class="fab fa-php"></i>'},
        {name: 'Laravel', icon: '<i class="fab fa-laravel"></i>'},
        {name: 'GitLab', icon: '<i class="fab fa-gitlab"></i>'},
        {name: 'GitHub', icon: '<i class="fab fa-github"></i>'},
        {name: 'Trello', icon: '<i class="fab fa-trello"></i>'},
      ],
      scroll:0,
    }
  },
  mounted() {
    gsap.to('.arrowDown', {y:-50, repeat:-1, duration:1, ease: 'power2.out'})
    window.addEventListener('scroll', this.scrollUp)
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrollUp)
  },
  methods: {
        scrollUp(){
            let position = window.scrollY
            this.scroll = position
        },
  },



}
</script>

<style scoped>
  .logo{
    height: 60vh;
  }

  .arrowDown{
   transition: 0.4s;
  }

  .vh-1000{
    height: 1000px;
  }
</style>

