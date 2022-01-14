new Vue({
    el: '#app',
    data: {
        images: [
            'https://unsplash.it/600/400?image=240',
            'https://unsplash.it/600/400?image=3',
            'https://unsplash.it/600/400?image=137',
            'https://unsplash.it/600/400?image=345',
            'https://unsplash.it/600/400?image=25',
        ],
        currentIndex: 0,
    },

    methods: {
        nextImg: function() {
            this.currentIndex++;
        },
        prevImg: function() {
            this.currentIndex--;
        },
    },
})