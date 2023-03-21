<script setup lang="ts">
import './Button.scss';
import { computed } from 'vue';
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: false,
        default: 'medium',
        validator: (value) => ['small', 'medium', 'large'].includes(value),
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
    }
});

const classes = computed(() => ({
    'k-button': true,
    'k-button--small': props.size === 'small',
    'k-button--medium': props.size === 'medium',
    'k-button--large': props.size === 'large',
    'k-button--primary': props.colorWay === 'primary',
    'k-button--warning': props.colorWay === 'warning',
    'k-button--info': props.colorWay === 'info',
    'k-button--error': props.colorWay === 'error',
    'k-button--black': props.colorWay === 'black',
    'k-button--white': props.colorWay === 'white',
}));

</script>
<template>
    <button
        type="button"
        :class="classes"
        @click="onClick"
    >
        {{ props.label }}
    </button>
</template>
