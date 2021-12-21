<template>
  <i class="fas fa-plus fa-2x open" @click="toggleMenu"></i>
  <transition
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutRight">
    <nav class="container-fluid" v-if="isOpen">
      <div class="row vh-100 justify-content-center align-items-center">
        <div class="col-12 text-center">
          <router-link to="/"><h1 class="my-5 display-4" @click="toggleMenu"><i class="fas fa-home me-3"></i>HOME</h1></router-link>
          <router-link to="/curriculum"><h1 class="my-5 display-4" @click="toggleMenu"><i class="fas fa-file-alt me-3"></i>CURRICULUM</h1></router-link>
          <router-link to="/contacts"><h1 class="my-5 display-4" @click="toggleMenu"><i class="fas fa-id-card me-3"></i>CONTACTS</h1></router-link>
        </div>
      </div>
    </nav>
  </transition>
  <router-view/>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleMenu(){
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        document.querySelector('.open').style.transform = 'rotate(45deg)'
        document.querySelector('.open').style.transition = '0.4s'
      }else{
        document.querySelector('.open').style.transform = 'rotate(0deg)'
        document.querySelector('.open').style.transition = '0.4s'
      }
    }
  },
}
</script>

<style>

nav {
  background: rgb(45, 44, 49);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 99;
}

nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a:hover{
  color: #42b983;
}

.open{
  position:fixed;
  top: 10px;
  right: 10px;
  color: #42b983;
  z-index: 999;
  background: transparent;
  cursor: pointer;
  
}

</style>
