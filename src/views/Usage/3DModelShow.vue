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
                url: 'https://www.rimowa.com/fr/en/unique/customize',
                title: 'RIMOWA',
                img: '/img/rimowa.png'
            },
            {
                url: 'https://domenicobrz.github.io/webgl/projects/SSRefractionDepthPeeling/',
                title: 'Guan Yu Figure',
                img: '/img/guan.png'
            },
            {
                url: 'https://toyotagazooracing.com/jp/gr/config/#/grspriusphv',
                title: 'Toyota',
                img: '/img/toyota.png'
            },
            {
                url: 'https://www.smart.com/de/de/modelle/eq-fortwo-coupe/konfigurator',
                title: 'Mercedes - Smart',
                img: '/img/smart.png'
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