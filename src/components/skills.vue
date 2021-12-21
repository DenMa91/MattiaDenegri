<template>
  <section class="container">
      <div class="row justify-content-center">
          <div class="col-12 text-center mb-4">
              <h3 class="display-4">Le Mie Competenze</h3>
          </div>
            <div class="col-6 col-md-3 text-center p-4" v-for="skill in skills" :key="skill.name">
                <h3>{{skill.name}}</h3>
                <div v-html="skill.icon"></div>
            </div>
      </div>
  </section>
</template>

<script>

export default {
    data() {
        return {
            skills:[
        {name: 'HTML5', icon: '<i class="fab fa-6x fa-html5"></i>'},
        {name: 'CSS3', icon: '<i class="fab fa-6x fa-css3-alt"></i>'},
        {name: 'Bootstrap', icon: '<i class="fab fa-6x fa-bootstrap"></i>'},
        {name: 'JavaScript', icon: '<i class="fab fa-6x fa-js"></i>'},
        {name: 'VueJS', icon: '<i class="fab fa-6x fa-vuejs"></i>'},
        {name: 'PHP', icon: '<i class="fab fa-6x fa-php"></i>'},
        {name: 'Laravel', icon: '<i class="fab fa-6x fa-laravel"></i>'},
        {name: 'GitLab', icon: '<i class="fab fa-6x fa-gitlab"></i>'},
        {name: 'GitHub', icon: '<i class="fab fa-6x fa-github"></i>'},
        {name: 'Trello', icon: '<i class="fab fa-6x fa-trello"></i>'},
      ],

      scroll:0
      }
    },
    methods: {
       
    },
   
    
}
</script>

<style>

</style>