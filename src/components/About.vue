<template>
    <div id="section-about" class="about">
        <div class="about-top">
            <p>My name is Ivan Stevkovski. I'm a passionate Front End Developer, as awell as a UX/UI design enthusiast who is always researching in order to stay up-to-date! My work always follows the latest standards.</p>
        </div>
        <div class="about-bottom">
            <h2>SKILLS</h2>
            <div class="skills">
                <div class="wrapper">
                    <div class="skill">
                        <img src="../assets/images/svg_icons/html5.svg">
                        <span>HTML5</span>
                    </div>
                    <div class="skill">
                        <img src="../assets/images/svg_icons/css3.svg">
                        <span>CSS</span>
                    </div>
                    <div class="skill">
                        <img src="../assets/images/svg_icons/bootstrap4.svg">
                        <span>Bootstrap 4</span>
                    </div>
                    <div class="skill">
                        <img src="../assets/images/svg_icons/sass.svg">
                        <span>Sass</span>
                    </div>
                </div>

                <div class="wrapper">
                    <div class="skill">
                        <img src="../assets/images/svg_icons/js.svg">
                        <span>JavaScript</span>
                    </div>
                    <div class="skill">
                        <img src="../assets/images/svg_icons/jquery.svg">
                        <span>jQuery</span>
                    </div>
                    <div class="skill">
                        <img src="../assets/images/svg_icons/reactjs.svg">
                        <span>ReactJS</span>
                    </div>
                    <div class="skill">
                        <img src="../assets/images/svg_icons/vuejs.svg">
                        <span>VueJS</span>
                    </div>
                </div>

                <div class="wrapper">
                    <div class="skill">
                        <img class="skill-bigger" src="../assets/images/svg_icons/node.svg">
                        <!-- <span>HTML5</span> -->
                    </div>
                    <div class="skill">
                        <img class="skill-bigger" src="../assets/images/svg_icons/npm.svg">
                        <!-- <span>HTML5</span> -->
                    </div>
                    <div class="skill">
                        <img src="../assets/images/svg_icons/drupal.svg">
                        <span>Drupal 8</span>
                    </div>
                    <div class="skill">
                        <img src="../assets/images/svg_icons/foundation.svg">
                        <span>Foundation</span>
                    </div>
                </div>

                <div class="wrapper wrapper-solo">
                    <div class="skill">
                        <img src="../assets/images/svg_icons/git.svg">
                    </div>
                    <div class="skill">
                        <img src="../assets/images/svg_icons/github.svg">
                    </div>
                    <div class="skill">
                        <img src="../assets/images/svg_icons/gitlab.svg">
                    </div>
                </div>
                
            </div>
            <img class="about-mountain-background" src="../assets/images/mountain-about.svg">
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/styles/about.scss';
</style>
