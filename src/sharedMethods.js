export default {
    methods: {
        sectionSlide: function(data) {
            $('html, body').animate({
                scrollTop: $(data).offset().top
            }, 700);
        },
        setNavActive(data) {
            this.$store.commit('setNavActive', data);
        }
    }
}