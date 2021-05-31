<template>
    <v-content class="ma-0 pa-0 grey-lighten-1">
        <v-container grid-list-xl fill-height>
            <v-layout row wrap justify-center align-center align-content-center>
                <v-flex xs12 class="display-3 font-weight-light text-center mb-5">
                    ( VR, AR, MR ) => WebXR
                </v-flex>
                <v-flex xs6 v-for="( item, i ) in items" :key="i">
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
                <v-flex xs12 class="title font-weight-light text-center">
                    AR 短视频道具、AR 测量工具、AR 家居装修预览
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
                url: 'https://www.youtube.com/watch?v=sWevv3zotXY',
                title: 'Looking Glass',
                img: '/modern-web-2019/img/looking_glass.jpg'
            },
            {
                url: 'https://stradavirtual.fiat.com.br/',
                title: 'Fiat Strada',
                img: '/modern-web-2019/img/fiat.png'
            },
            {
                url: 'https://weibo.com/tv/v/I1oqGlYjS?fid=1034:4403322317378716',
                title: 'AR 化學教學工具',
                img: '/modern-web-2019/img/ar_education.png'
            },
            {
                url: 'https://www.youtube.com/watch?v=-PzeWxtOGzQ',
                title: 'Magic Leap’s Mica at GDC 2019',
                img: '/modern-web-2019/img/mica.jpg'
            },
        ]

    })
}
</script>