<script setup lang="ts">
import { IconHome, IconChevronLeft, IconShoppingCart, IconBell } from '@tabler/icons-vue';
import { findColorWay } from '../../Utils';

const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    onClick: {
        type: Function,
        required: false,
        default: () => alert('Button pressed'),
    },
    colorWay: {
        type: String,
        required: false,
        default: 'primary'
    },
});

</script>
<template>
    <i
        class="transition p-3 flex flex-col justify-center items-center w-min h-min rounded-full"
        :class="findColorWay(props.colorWay)"
        @click="onClick"
    >
        <IconHome v-if="props.icon.toLowerCase() === 'home'" :size="24" />
        <IconChevronLeft v-if="props.icon.toLowerCase() === 'back'" :size="24" />
        <IconShoppingCart v-if="props.icon.toLowerCase() === 'cart'" :size="24" />
        <IconBell v-if="props.icon.toLowerCase() === 'bell'" :size="24" />
    </i>
</template>
