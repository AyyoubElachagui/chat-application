<template>
    
    <div v-if="isUser" class="chat-message">
        <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                <div class="px-4 py-2 rounded-lg rounded-br-none bg-blue-600 text-start text-white hover:bg-gray-200 hover:shadow-lg">
                    <span class="text-white font-light underline">{{ this.$store.state.auth.user.name }}</span><br>
                    <span class="text-gray-100 ">{{ message }}</span>
                </div>
            </div>
        </div>
    </div>
    <div v-if="!isUser" class="chat-message">
         <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div></div>
               <div class="px-4 py-2 rounded-lg rounded-bl-none bg-gray-300 text-start hover:bg-gray-200 hover:shadow-lg">
                    <span class="text-black font-light underline">{{ this.$store.state.auth.user.name }}</span><br>
                    <span class="text-gray-800 ">{{ message }}</span>
                </div>
            </div>
         </div>
      </div>
</template>

<script>
export default {
    name: "UserBarCards",
    props: ['_message', '_isUser'],
    data(){
        return {
            message: this._message,
            isUser: this._isUser,
        }
    }

}
</script>