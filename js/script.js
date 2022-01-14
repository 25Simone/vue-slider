new Vue({
    el: '#app',
    data: {
        images: [
            'https://unsplash.it/600/400?image=240',
            'https://unsplash.it/600/400?image=3',
            'https://unsplash.it/600/400?image=137',
            'https://unsplash.it/600/400?image=345',
            'https://unsplash.it/600/400?image=28',
        ],
        currentIndex: 0,
    },

    methods: {
        nextImg: function() {
            this.currentIndex++;
            if(this.currentIndex > this.images.length - 1){
                this.currentIndex = 0;
            }
        },
        prevImg: function() {
            this.currentIndex--;
            if(this.currentIndex < 0){
                this.currentIndex = this.images.length - 1;
            }
        },
    },
})