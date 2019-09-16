<template>
    <v-content class="ma-0 pa-0 grey-lighten-1">
        <v-container grid-list-xl fill-height>
            <v-layout row wrap justify-center align-center align-content-center>
                <v-flex xs12 class="display-3 font-weight-light text-center mb-5">
                    3D 模型展示
                </v-flex>
                <v-flex xs4 v-for="( item, i ) in items" :key="i">
                    <v-card :href="item.url" target="_blank" hover>
                        <v-img
                            :src="process.env.BASE_URL.slice( 0, process.env.BASE_URL.length - 1 ) + item.img" 
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
                url: 'https://demos.sketchfab.com/clients/nike-configurator/index.html',
                title: 'Nike Air Max 270',
                img: '/img/nike_air_max_270.png'
            },
            {
                url: 'http://tapmod.studio/fender',
                title: 'Fender Telecaster',
                img: '/img/fender_telecaster.png'
            },
            {
                url: 'https://demos.sketchfab.com/clients/audi/index.html',
                title: 'Audi Q7',
                img: '/img/audi_q7.png'
            },
            {
                url: 'http://tinyurl.com/y5marejw',
                title: 'The Met Museum',
                img: '/img/met_museum.png'
            },
            {
                url: 'https://dimension.adobe.com/viewer/index.html?gv=https://dncrshare-us-east-1.cloud.adobe.io/v1/shared_asset.glb?shared_asset_base64_encode=aHR0cHM6Ly9jYy1hcGktY3AuYWRvYmUuaW8vYXBpL3YyL2RpbWVuc2lvbi9hc3NldHMvNmQxNmRhYjEtNTc0Ni00ZjJlLWFjOWYtNDRlMWQ3YmVkMjg5L29yaWdpbmFsL3ZlcnNpb24vMA==',
                title: 'Adobe Dimension',
                img: '/img/adobe_dimension.png'
            },
            {
                url: 'https://sketchfab.com/3d-models/upper-left-second-molar-cd766135210449ad87110dbeefa93af0',
                title: 'Queen Mary University of London',
                img: '/img/queen_mary.png'
            },
        ]

    })
}
</script>