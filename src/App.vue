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
  components: {
		Header,
		Home,
    About,
    Projects,
    Contact
  }
}

$(document).on('scroll', () => {
  if($(document).scrollTop() >= 150) {
    $('#header-home').addClass('header-home-hide');
    $('#section-header').addClass('header-show');
  } else {
    $('#header-home').removeClass('header-home-hide');
    $('#section-header').removeClass('header-show');
  }
});

</script>

<style>
  @import "./assets/styles/normalize.scss";
</style>
