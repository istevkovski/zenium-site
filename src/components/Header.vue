<template>
    <div id="section-header" class="header">
        <h2 class="header-title">Hire a professional</h2>
        <div class="header-nav">
            <button class="header-nav-link header-nav-active">Home</button>
            <button class="header-nav-link">About</button>
            <button class="header-nav-link">Projects</button>
            <button class="header-nav-link">Contact</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles/variables.scss";

    .header {
        // display: flex;
        display: none;
        position: fixed;
        width: 100%;
        height: 60px;
        justify-content: space-between;
        padding: 0px 40px;
        background-color: $znx-darkblue;
        
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

            &:last-of-type {
                margin-right: 0;
            }

            &:hover {
                color: $znx-pink;
            }
        }

        &-nav-active {
            font-weight: 400;
            color: $znx-pink;
        }

    }
</style>
