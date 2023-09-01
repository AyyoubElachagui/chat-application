<template>   
    <form>
        <div class="flex">
            <div class="w-full absolute bottom-0 left-0">
                <textarea v-model="this.message" type="text" id="search-dropdown" class="block p-4 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="send something amazing ....." rows="1"></textarea>
                <button v-on:click="sendMessage" type="button" class="absolute top-0 right-0 p-4 text-sm font-medium text-white bg-blue-700 rounded-l-lg rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <img src="./../../assets/send.png" alt="send" class="w-5 h-5"/>
                </button>
            </div>
        </div>
    </form>
</template>
<script>
import { useToast } from 'vue-toastification'
const toast = useToast()
export default {
    name: "MessageForm",
    data(){
        return {
            message: ''
        }
    },
    methods: {
        sendMessage(){
            if(this.message === ''){
            toast.warning("Please write something before send your message!");
            }
            this.$store.dispatch('user/addNewMessage', {
                user_id: this.$store.state.auth.user.id,
                text: this.message
            })
            this.message = "";
        }
    }
}
</script>