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
                    <img src="../assets/images/tpist_0.png">
                </div>
                <div class="project-bottom">
                    <div class="project-title">
                        <h2>tpist_0</h2>
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
                    <img src="../assets/images/nexter.png">
                </div>
                <div class="project-bottom">
                    <div class="project-title">
                        <h2>Nexter</h2>
                    </div>
                    <div class="project-credits">
                        <span>Designed by: Jonas Schmedtmann</span>
                        <span>Developed by: Ivan Stevkovski</span>
                    </div>
                </div>
            </div>
            <div class="project">
                <div class="project-top">
                    <img src="../assets/images/trillo.png">
                </div>
                <div class="project-bottom">
                    <div class="project-title">
                        <h2>Trillo</h2>
                    </div>
                    <div class="project-credits">
                        <span>Designed by: Jonas Schmedtmann</span>
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
            <button class="btn-slide btn-slide-left"></button>
            <button class="btn-slide btn-slide-right"></button>
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

    },
    created: function() {
        const vueThis = this;
        // this.maxSlides = $('.project').length;
    }
}

$(document).ready(function() {
    $('.btn-slide-left').on('click', function() {
        $('.slick-prev').click()
    });
    $('.btn-slide-right').on('click', function() {
        $('.slick-next').click()
    });

    $('.projects-middle').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    centerMode: true
                }
            }
        ]
    });

    $('.project').find('.project-title').find('h2').click(function() {
        const genThis = this;
        // console.log($(genThis).hasClass('slick-current'));
        if($(genThis).parents('.project').hasClass('slick-current') == true){
            window.open($(genThis).parents('.project').find('img').attr('src'));
        }
    });
});

</script>

<style lang="scss" scoped>
    @import '../assets/styles/projects.scss';
</style>

<style lang="scss">

    .slick-arrow {
        display: none !important;
    }
</style>
