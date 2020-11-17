<template>
<div id="play_list">
    <h1> This is the Play List </h1>
   <wishlist v-for = "songchoice in songchoices " :key=" songchoice.artist " :songchoice= songchoice :isplaylist= "false" />
</div>
</template>

<script>
import wishlist from './wishlist.vue'
export default {
    name:"play-list",
    components:{
        wishlist
    },
    computed:{
        songchoices:function(){
        return this.$store.state.wishlist;
        
    }}
}
</script>

<style scoped>
#play_list{
    border: 1px solid black;
}
</style>