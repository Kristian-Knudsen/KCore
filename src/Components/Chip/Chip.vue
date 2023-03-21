<script setup lang="ts">
import './Chip.scss';
import { computed } from 'vue';

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    onClick: {
        type: Function,
        required: false,
        default: () => alert('Chip pressed'),
    },
    colorWay: {
        required: false,
        type: String,
        default: 'primary'
    }
});

const classes = computed(() => ({
    'k-chip': true,
    'k-chip--primary': props.colorWay === 'primary',
    'k-chip--warning': props.colorWay === 'warning',
    'k-chip--info': props.colorWay === 'info',
    'k-chip--error': props.colorWay === 'error',
    'k-chip--black': props.colorWay === 'black',
    'k-chip--white': props.colorWay === 'white',
}));

</script>
<template>
    <div
        :class="classes"
        @click="onClick"
    >
        {{ props.label }}
    </div>
</template>
