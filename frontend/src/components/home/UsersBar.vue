<template>
    <div class="w-screnn backdrop-blur-xl bg-white/30 shadow rounded p-10 grid grid-cols-6 gap-4 m-10 " style="height: 80vh;">
        <div class="h-full bg-black">
            hello
        </div>
        <div class="col-span-4 bg-white shadow rounded">
        </div>
        <div class="bg-white shadow rounded p-4 flex flex-col-reverse">
            <div v-for="n in 5" :key="n" class="rounded shadow-md">
                <div>
                    <UserBarCards :bg_color="generator()" :position="n" style="background: {{color}}"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import UserBarCards from "./UserBarCards.vue"

export default {
    name: 'UsersBar',
    data(){
        return {
            color: "#000"
        }
    },
    components: {
        UserBarCards
    },
    methods: {
      generator(){
        return 'w-40 h-40 rounded bg-[#'+(Math.random()*0xFFFFFF<<0).toString+'] shadow-md m-4';
      }
    }
} 
</script>