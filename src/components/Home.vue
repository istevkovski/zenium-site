<template>
    <div id="section-home" class="home">
        <div id="header-home" class="header-home">
            <div class="header-left">
                <h4>Ivan <span>Stevkovski</span></h4>
                <p>Front End Developer</p>
            </div>
            <div class="header-right">
                <button class="nav-link nav-active">Home</button>
                <button class="nav-link">About</button>
                <button class="nav-link">Projects</button>
                <button class="nav-link">Contact</button>
            </div>
        </div>
        <div class="home-main">
            <!-- <img class="mountain-background" src="../assets/images/mountain-background.svg"> -->
            <h2 class="main-msg">Looking for a developer?_</h2>
            <button class="btn">
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
export default {
    name: "Home",
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles/home.scss";
</style>
