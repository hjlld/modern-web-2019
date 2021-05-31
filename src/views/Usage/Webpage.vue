<template>
    <v-content class="ma-0 pa-0 grey-lighten-1">
        <v-container grid-list-xl fill-height>
            <v-layout row wrap justify-center align-center align-content-center>
                <v-flex xs12 class="display-3 font-weight-light text-center mb-5">
                    用 3D 技术提升网页的视觉和创意体验
                </v-flex>
                <v-flex xs3 v-for="( item, i ) in items" :key="i">
                    <v-card :href="item.url" target="_blank" hover>
                        <v-img
                            :src="item.img" 
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
                url: 'http://letsplay.ouigo.com/',
                title: 'OUIGO',
                img: '/img/ouigo.png'
            },
            {
                url: 'https://questionsinthesky.airfrance.com/',
                title: 'Questions in the sky',
                img: '/img/sky.png'
            },
            {
                url: 'https://scars.forhonorgame.com/',
                title: 'For Honor - Scars',
                img: '/img/scar.png'
            },
            {
                url: 'https://www.operanorth.co.uk/turn-of-the-screw-immersive-trailer/',
                title: 'Turn of the Screw',
                img: '/img/screw.png'
            },
            {
                url: 'https://panamaera.fr/',
                title: 'Panamaera',
                img: '/img/panamaera.png'
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
                url: 'https://wearezizo.com/',
                title: 'We are Zizo',
                img: '/img/zizo.png'
            },
        ]

    })
}
</script>