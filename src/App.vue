<template>
    <v-app style="background: none;">
        <v-app-bar app :collapse="!ifShowDrawer" color="primary" clipped-left>
            <v-app-bar-nav-icon color="secondary" @click.stop="ifShowDrawer = !ifShowDrawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="headline text-uppercase">
                <span class="white--text">WebGL 生态与最佳实践</span>
                <span class="font-weight-light grey--text text--lighten-2 subtitle-2 pl-3">贝壳找房 - 郝稼力</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-navigation-drawer app left clipped v-model="ifShowDrawer">
            <v-list shaped>
                <v-list-item-group :value="currentSelected( i )" v-for="( chapter, i ) in contentTable" :key="i">
                    <v-subheader>{{ chapter.mainTitle }}</v-subheader>
                    <v-list-item v-for="(slide, j) in chapter.slides" :key="j" inset @click="jump(i, j)">
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

        jump( chapterIndex, slideIndex ) {

            this.chapterIndex = chapterIndex;

            this.slideIndex = slideIndex;

            this.$router.push( { path: this.contentTable[ this.chapterIndex ].slides[ this.slideIndex ].path } );


        },

        currentSelected( chapterIndex ) {

            if ( this.chapterIndex === chapterIndex ) {

                return this.slideIndex;

            } else {

                return false

            }

        },

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
/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
    width:4px;
    height:16px;
    background-color:#F5F5F5;
}
/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track
{
    box-shadow:inset 0 0 6px rgba(0,0,0,0.3);
    border-radius:10px;
    background-color:#F5F5F5;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius:10px;
    box-shadow:inset 0 0 6px rgba(0,0,0,.3);
    background-color:#555;
}
ul {
    list-style-type: none;
}
</style>
