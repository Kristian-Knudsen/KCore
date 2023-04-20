<script setup lang="ts">

const props = defineProps({
    hasBorder: {
        type: Boolean,
        required: false,
        default: false,
    },
    borderColor: {
        type: String,
        required: false,
        default: '#000',
    }
});

</script>
<template>
    <div
        :class="props.hasBorder === true ? 'border w-min p-1 rounded': null"
        class="flex flex-row gap-2"
    >
        <slot></slot>
    </div>
</template>
