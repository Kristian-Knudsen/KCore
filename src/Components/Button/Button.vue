<script setup lang="ts">
import { findColorWay } from '../../Utils';

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    onClick: {
        type: Function,
        required: false,
        default: () => alert('Button pressed'),
    },
    colorWay: {
        required: false,
        type: String,
        default: 'primary'
    },
    block: {
        required: false,
        type: Boolean,
        default: false,
    },
});

</script>
<template>
    <!--  TODO: Add font -->
    <button
        class="transition cursor-pointer py-2 px-6 rounded-full"
        type="button"
        :class="[findColorWay(props.colorWay), props.block === true ? 'w-full': null]"
        @click="onClick"
    >
        {{ props.label }}
    </button>
</template>
