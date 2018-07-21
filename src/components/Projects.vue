<template>
    <div id="section-projects" class="projects">
        <div class="projects-top">

        </div>
        <div class="projects-middle">
            <div class="project">
                <div class="project-top">
                    <img src="../assets/images/alkanes.png">
                </div>
                <div class="project-bottom">
                    <div class="project-title">
                        <h2>_alkanes</h2>
                    </div>
                    <div class="project-credits">
                        <span>Designed by: Ivan Stevkovski</span>
                        <span>Developed by: Ivan Stevkovski</span>
                    </div>
                </div>
            </div>
            <div class="project">
                <div class="project-top">
                    <img src="../assets/images/spoof.png">
                </div>
                <div class="project-bottom">
                    <div class="project-title">
                        <h2>Spoof</h2>
                    </div>
                    <div class="project-credits">
                        <span>Designed by: Ivan Stevkovski</span>
                        <span>Developed by: Ivan Stevkovski</span>
                    </div>
                </div>
            </div>
            <div class="project">
                <div class="project-top">
                    <img src="../assets/images/skydox.png">
                </div>
                <div class="project-bottom">
                    <div class="project-title">
                        <h2>Skydox</h2>
                    </div>
                    <div class="project-credits">
                        <span>Designed by: Ivan Stevkovski</span>
                        <span>Developed by: Ivan Stevkovski</span>
                    </div>
                </div>
            </div>
            <div class="project">
                <div class="project-top">
                    <img src="../assets/images/natours.png">
                </div>
                <div class="project-bottom">
                    <div class="project-title">
                        <h2>Natours</h2>
                    </div>
                    <div class="project-credits">
                        <span>Designed by: Jonas Schmedtmann</span>
                        <span>Developed by: Ivan Stevkovski</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="projects-bottom">
            <button v-on:click="slideLeft()" class="btn-slide btn-slide-left"></button>
            <button v-on:click="slideRight()" class="btn-slide btn-slide-right"></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects',
    data() {
        return {
            currSlide: 1,
            maxSlides: 4
        }
    },
    methods: {
        slideLeft: function() {
            if(this.currSlide > 1) {
                $('.project').css('left', `${parseInt($('.project').css('left'), 10) + 604}px`);
                this.currSlide--;
            }
        },
        slideRight: function() {
            if(this.currSlide < this.maxSlides) {
                $('.project').css('left', `-${604 * this.currSlide}px`);
                this.currSlide++;
            }
        }
    },
    created: function() {
        const vueThis = this;
        // this.maxSlides = $('.project').length;
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/styles/projects.scss';
</style>

