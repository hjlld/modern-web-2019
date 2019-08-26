<template>
    <v-app style="background: none;">
        <v-app-bar app :collapse="!ifShowDrawer" color="primary" clipped-left>
            <v-app-bar-nav-icon color="secondary" @click.stop="ifShowDrawer = !ifShowDrawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="headline text-uppercase">
                <span>請在網頁中使用 3D</span>
                <span class="font-weight-light grey--text text--lighten-2 subtitle-2 pl-3">HiWebGL</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-navigation-drawer app left clipped v-model="ifShowDrawer">
            <v-list shaped>
                <v-list-item-group :value="true" v-for="( chapter, i ) in contentTable" :key="i">
                    <v-subheader>{{ chapter.mainTitle }}</v-subheader>
                    <v-list-item v-for="(slide, i) in chapter.slides" :key="i" inset>
                        <v-list-item-icon>
                            <v-icon v-text="slide.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="slide.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <router-view></router-view>
    </v-app>
</template>

<script>
import { HTTP } from './plugins/toolkit';

export default {
    name: 'App',
    data: () => ({
        ifShowDrawer: false,
        contentTable: [
            {
                mainTitle: '',
                slides:[{
                    title: ''
                }]
            }
        ],
        chapterIndex: 0,
        slideIndex: 0
    }),
    created: async function() {
 
        this.contentTable = await HTTP.Get('/ContentTable.json');

        for ( let i = 0; i < this.contentTable.length; i++ ) {

            for ( let j = 0, slides = this.contentTable[ i ].slides; j < slides.length; j++ ) {

                if ( slides[ j ].path === this.$route.path ) {

                    this.chapterIndex = i;

                    this.slideIndex = j;

                    break;

                }

            }

        }

        window.addEventListener( 'keyup', ( event ) => {

            if ( event.key === 'ArrowRight' ) {

                this.next();

            }

            if ( event.key === 'ArrowLeft' ) {

                this.previous();

            }

        }, false );

    },
    methods: {

        next() {

            if ( this.slideIndex === this.contentTable[ this.chapterIndex ].slides.length - 1 ) {

                if ( this.chapterIndex === this.contentTable.length - 1 ) {

                    this.chapterIndex = 0;

                } else {

                    this.chapterIndex ++;

                }

                this.slideIndex = 0;

            } else {

                this.slideIndex ++;

            }

            this.$router.push( { path: this.contentTable[ this.chapterIndex ].slides[ this.slideIndex ].path } );

        },

        previous() {

            if ( this.slideIndex === 0 ) {

                if ( this.chapterIndex === 0 ) {

                    return;

                } else {

                    this.chapterIndex --;

                }

                this.slideIndex = this.contentTable[ this.chapterIndex ].slides.length - 1;

            } else {

                this.slideIndex --;

            }


            this.$router.push( { path: this.contentTable[ this.chapterIndex ].slides[ this.slideIndex ].path } );

        }

    }
};
</script>

<style>
html, body {
    overflow-y: hidden !important;
}
a {
    text-decoration: none;
}
</style>
