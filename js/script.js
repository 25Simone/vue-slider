new Vue({
    el: '#app',
    data: {
        images: [
            'https://unsplash.it/600/400?image=240',
            'https://unsplash.it/600/400?image=3',
            'https://unsplash.it/600/400?image=137',
            'https://unsplash.it/600/400?image=347',
            'https://unsplash.it/600/400?image=28',
            'https://unsplash.it/600/400?image=38',
            'https://unsplash.it/600/400?image=58',
        ],
        currentIndex: 0,
        mosueOver: false,
        timer: null,
    },
    methods: {
        nextImg: function() {
            this.currentIndex = this.currentIndex >= this.images.length - 1 ? 0 : this.currentIndex + 1;
        },
        prevImg: function() {
            this.currentIndex = this.currentIndex <= 0 ? this.images.length-1 : this.currentIndex - 1;
        },
        automaticChange: function() {
            this.timer = setInterval( () => {
                this.currentIndex = this.currentIndex >= this.images.length - 1 ? 0 : this.currentIndex + 1;
            },2000)
        },
        mouseOverFunction: function(){
            this.mosueOver = true;
            clearInterval(this.timer);
        },
        mouseLeaveFunction: function(){
            this.mouseOver = false;
            this.automaticChange();
        },
        goToImage(index){
            this.currentIndex = index;
        }
    },
    mounted() {
        this.automaticChange()
    },
})