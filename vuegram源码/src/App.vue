<template>
    <div id="app">
        <div class="app-phone">
            <div class="phone-header">
                <a
                    class="cancel-cta"
                    v-if="step === 2 || step === 3"
                    @click="goToHome"
                >
                    Cancel
                </a>
                <img src="./assets/vue_gram_logo_cp.png">
                <a
                    class="next-cta"
                    v-if="step === 2"
                    @click="step++"
                >
                    Next
                </a>
                <a
                    class="next-cta"
                    v-if="step === 3"
                    @click="share"
                >
                    Share
                </a>
            </div>
            <PhoneBody
                :posts="posts"
                :step="step"
                :image="image"
                :filters="filters"
                :selectFilter="selectFilter"
                v-model="caption"
            ></PhoneBody>
            <div class="phone-footer">
                <div class="home-cta">
                    <i
                        class="fas fa-home fa-lg"
                        @click="goToHome"
                    ></i>
                </div>
                <div class="upload-cta">
                    <input
                        type="file"
                        id="file"
                        name="file"
                        :disabled="step !== 1"
                        @change="uploadImage"
                    />
                    <label for="file">
                        <i class="far fa-plus-square fa-lg"></i>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PhoneBody from './components/PhoneBody';
import posts from './data/posts';
import filters from './data/filters';
import eventBus from './event-bus';

export default {
    name: 'app',
    components: {
        PhoneBody
    },
    data() {
        return {
            posts,
            filters,
            step: 1,
            image: '',
            selectFilter: '',
            caption: ''
        };
    },
    created() {
        eventBus.$on('selectedFilter', evt => {
            this.selectFilter = evt;
        });
    },
    methods: {
        uploadImage(e) {
            const files = e.target.files;
            if (!files.length) return;
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = e => {
                this.image = e.target.result;
                this.step = 2;
            };
        },
        goToHome() {
            this.image = '';
            this.selectFilter = '';
            this.step = 1;
        },
        share() {
            const post = {
                username: 'liuluwei',
                userImage:
                    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg',
                postImage: this.image,
                likes: 0,
                hasBeenLiked: false,
                caption: this.caption,
                filter: this.selectFilter
            };
            this.posts.unshift(post);
            this.caption = '';
            this.goToHome();
        }
    }
};
</script>

<style lang="scss" src="./styles/app.scss">
</style>
