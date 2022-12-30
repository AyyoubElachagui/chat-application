<template>
    <div class="w-screnn backdrop-blur-xl bg-white/30 shadow rounded p-10 grid grid-cols-1 gap-4 m-10 " style="height: 80vh;">
        <!-- <div class="h-full bg-black">
            hello
        </div> -->
        <div class="bg-white shadow-md rounded border-2 relative">
            <div class="flex flex-col-reverse space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch mt-4" style="height: 60vh;">
                <div v-for="message in this.$store.state.user.messages[0]" :key="message.id">
                    <div>
                        <UserBarCards :_message="message" :_isUser="message.user_id == this.$store.state.auth.user.id" />
                    </div>
                </div>
            </div>
            <MessageForm />
        </div>
        <!-- <div class="bg-white shadow rounded p-4 flex flex-col-reverse">
            <div v-for="n in this.$store.state.user.users" :key="n" class="rounded shadow-md h-16 my-2">
                <div>
                    <UserBarCards :bg_color="generator()" :position="n" style="background: {{color}}"/>
                </div>
            </div>
            {{  }}
        </div> -->
    </div>
</template>
<script>
import UserBarCards from "./UserBarCards.vue"
import MessageForm from "./MessageForm.vue"

export default {
    name: 'UsersBar',
    data(){
        return {
            color: "#000"
        }
    },
    created() {
        this.$store.dispatch('user/getAllUsers');
    },
    components: {
        UserBarCards,
        MessageForm
    },
    methods: {
      generator(){
        return 'w-40 h-40 rounded bg-[#'+(Math.random()*0xFFFFFF<<0).toString+'] shadow-md m-4';
      }
    }
} 
</script>