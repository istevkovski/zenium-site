<template>
    <div id="section-header" class="header">
        <h2 class="header-title">Hire a professional</h2>
        <div class="header-nav">
            <button v-on:click="sectionSlide('#section-home'), setNavActive(1)" v-bind:class="{'header-nav-active':navActive == 1}" class="header-nav-link"><span>Home</span></button>
            <button v-on:click="sectionSlide('#section-about'), setNavActive(2)" v-bind:class="{'header-nav-active':navActive == 2}" class="header-nav-link"><span>About</span></button>
            <button v-on:click="sectionSlide('#section-projects'), setNavActive(3)" v-bind:class="{'header-nav-active':navActive == 3}" class="header-nav-link"><span>Projects</span></button>
            <button v-on:click="sectionSlide('#section-contact'), setNavActive(4)" v-bind:class="{'header-nav-active':navActive == 4}" class="header-nav-link"><span>Contact</span></button>
        </div>
    </div>
</template>

<script>
import sharedMethods from '../sharedMethods.js';

export default {
    name: "Header",
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
    @import "../assets/styles/variables.scss";

    .header {
        display: flex;
        // display: none;
        position: fixed;
        top: -70px;
        width: 100%;
        height: 60px;
        justify-content: space-between;
        padding: 0px 40px;
        background-color: $znx-darkblue;
        box-shadow: 0 4px 6px rgba(0, 0, 0, .35);
        transition: all .4s;
        z-index: 10;
        
        &-title {
            font-family: $font-opensans;
            font-weight: 300;
            font-size: $font-s;
            color: $znx-white;
            margin: auto 0;
        }

        &-nav-link {
            font-family: $font-barlow;
            font-weight: 300;
            font-size: $font-s;
            color: $znx-white;
            height: 100%;
            margin: auto 0;
            margin-right: 30px;
            background-color: transparent;
            border: none;
            text-transform: uppercase;
            transition: all .25s;

            span {
                cursor: pointer;
            }

            &:last-of-type {
                margin-right: 0;
            }

            &:hover {
                color: $znx-pink;
            }
        }

        &-nav-active {
            font-weight: 600;
            color: $znx-pink;
        }

        &-show {
            top: 0;
        }

    }
</style>
