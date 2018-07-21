<template>
  <div id="app">
		<Header/>
		<Home/>
    <About/>
    <Projects/>
    <Contact/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


export default {
  name: 'App',
  created: function() {
    const vueThis = this;
    $(document).on('scroll', () => {
      if($(document).scrollTop() >= 150) {
        $('#header-home').addClass('header-home-hide');
        $('#section-header').addClass('header-show');
      } else {
        $('#header-home').removeClass('header-home-hide');
        $('#section-header').removeClass('header-show');
      }


      if($(document).scrollTop()>=$('#section-home').position().top){
        vueThis.$store.commit('setNavActive', 1);
      }
      if($(document).scrollTop()>=$('#section-about').position().top){
        vueThis.$store.commit('setNavActive', 2);
      }
      if($(document).scrollTop()>=$('#section-projects').position().top){
        vueThis.$store.commit('setNavActive', 3);
      }
      if($(document).scrollTop()>=$('#section-contact').position().top){
        vueThis.$store.commit('setNavActive', 4);
      }
    });

  },
  components: {
		Header,
		Home,
    About,
    Projects,
    Contact
  }
}

</script>

<style>
  @import "./assets/styles/normalize.scss";
</style>
