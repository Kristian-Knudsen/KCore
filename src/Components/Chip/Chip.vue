<script setup lang="ts">
import { findColorWay } from '../../Utils';

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    colorWay: {
        required: false,
        type: String,
        default: 'primary'
    }
});

</script>
<template>
    <div
        class="transition w-max border rounded-2xl py-1 px-4"
        :class="findColorWay(props.colorWay, false)"
    >
        {{ props.label }}
    </div>
</template>
