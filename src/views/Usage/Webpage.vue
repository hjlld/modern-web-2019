<template>
    <v-content class="ma-0 pa-0 grey-lighten-1">
        <v-container grid-list-xl fill-height>
            <v-layout row wrap justify-center align-center align-content-center>
                <v-flex xs12 class="display-3 font-weight-light text-center mb-5">
                    用 3D 技術提升網頁的視覺和創意體驗
                </v-flex>
                <v-flex xs3 v-for="( item, i ) in items" :key="i">
                    <v-card :href="item.url" target="_blank" hover>
                        <v-img
                            :src="'/modern-web-2019' + item.img" 
                            height="200px">
                        </v-img>
                        <v-container fill-height fluid class="black--text">
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline">{{ item.title }}</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>
<script>
export default {
    data: () => ({

        items: [
            {
                url: 'https://marmont.gucci.com/',
                title: 'GG Marmont - GUCCI',
                img: '/img/gg_marmont.png'
            },
            {
                url: 'https://liquid.lab.lorenzocadamuro.com/',
                title: 'Liquid simulation',
                img: '/img/liquid_simulation.png'
            },
            {
                url: 'https://www.rickandmorty.com/?a',
                title: 'Rick and Morty',
                img: '/img/rick_and_morty.png'
            },
            {
                url: 'https://www.nytimes.com/interactive/2019/07/18/science/apollo-11-moon-landing-photos-ul.html',
                title: 'Apollo 11 As They Shot It',
                img: '/img/apollo_11.png'
            },
            {
                url: 'https://hinderer-wolff.fr/cepages-alsace',
                title: 'Hinderer Wolff',
                img: '/img/hinderer_wolff.png'
            },
            {
                url: 'https://nulldesign.jp/skynet/',
                title: 'Sky Net',
                img: '/img/sky_net.png'
            },
            {
                url: 'http://taotajima.jp/',
                title: 'Tao Tajima',
                img: '/img/taotajima.png'
            },
            {
                url: 'https://www.obynars.com/',
                title: 'O by Nars',
                img: '/img/o_by_nars.png'
            },
        ]

    })
}
</script>