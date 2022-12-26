<template>
    <div>
        tests {{ pos }}
    </div>
</template>

<script>
export default {
    name: "UserBarCards",
    props: ['bg_color', 'position'],
    data(){
        return {
            color: this.bg_color,
            pos: this.position
        }
    }

}
</script>