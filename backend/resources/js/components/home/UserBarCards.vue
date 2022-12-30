<template>
    
    <div v-if="isUser" class="chat-message mt-2">
        <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                <div class="px-4 py-2 rounded-lg rounded-br-none bg-blue-600 text-start text-white hover:bg-blue-500 hover:shadow-lg">
                    <span class="text-white font-light underline">{{ message.name }}</span> - <span class="text-xs font-thin text-black  py-0.5 px-2 bg-white rounded-md " style="font-size: 10px">{{ formatDate(message.created_at) }} </span><br>
                    <span class="text-gray-100 ">{{ message.text }}</span>
                </div>
            </div>
        </div>
    </div>
    <div v-if="!isUser" class="chat-message mt-2">
         <div class="flex items-end">
            <div class="flex flex-col space-y-4 text-xs max-w-xs mx-2 order-2 items-start">
               <div class="px-4 py-2 rounded-lg rounded-bl-none bg-gray-300 text-start hover:bg-gray-200 hover:shadow-lg">
                    <span class="text-black font-light underline">{{ message.name }}</span> - <span class="text-xs font-thin text-black text-end py-0.5 px-2 bg-white rounded-md " style="font-size: 10px">{{ formatDate(message.created_at) }} </span><br>
                    <span class="text-gray-800 ">{{ message.text }}</span>
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
    },  
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
                // Then specify how you want your dates to be formatted
            return new Intl.DateTimeFormat('default', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hourCycle: 'h23'
                }).format(date);
        }
    }

}
</script>