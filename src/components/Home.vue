<template>
    <div id="section-home" class="home">
        <div id="header-home" class="header-home">
            <div class="header-left">
                <h4>Ivan <span>Stevkovski</span></h4>
                <p>Front End Developer</p>
            </div>
            <div class="header-right">
                <button v-bind:class="{'nav-active': navActive == 1}" class="nav-link"><span v-on:click="sectionSlide('#section-home'), setNavActive(1)">Home</span></button>
                <button v-bind:class="{'nav-active': navActive == 2}" class="nav-link"><span v-on:click="sectionSlide('#section-about'), setNavActive(2)">About</span></button>
                <button v-bind:class="{'nav-active': navActive == 3}" class="nav-link"><span v-on:click="sectionSlide('#section-projects'), setNavActive(3)">Projects</span></button>
                <button v-bind:class="{'nav-active': navActive == 4}" class="nav-link"><span v-on:click="sectionSlide('#section-contact'), setNavActive(4)">Contact</span></button>
            </div>
        </div>
        <div class="home-main">
            <!-- <img class="mountain-background" src="../assets/images/mountain-background.svg"> -->
            <h2 class="main-msg">Looking for a developer?_</h2>
            <button class="btn" v-on:click="sectionSlide('#section-about')">
                Find Out More
            </button>
            <p class="moto-msg">_INSPIRATION, ONE STEP AHEAD</p>
        </div>
        <div class="container">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
        </div>
    </div>
</template>

<script>
import sharedMethods from '../sharedMethods.js';

export default {
    name: "Home",
    data() {
        return {

        }
    },
    computed: {
        navActive() {
            return this.$store.state.navActive;
        }
    },
    mixins: [sharedMethods]
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles/home.scss";
</style>
