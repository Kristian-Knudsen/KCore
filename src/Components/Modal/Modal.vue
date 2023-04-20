<script setup lang="ts">
import { IconX } from '@tabler/icons-vue';
import Button from '../Button/Button.vue';
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    shouldOpen: {
        type: Boolean,
        required: true,
    },
    closeModal: {
        type: Function,
        required: true
    }
});

</script>
<template v-if="props.shouldOpen === true">
    <div class="border border-red-400 w-1/2 p-4">
        <!-- Topbar -->
        <div class="flex flex-row justify-between items-center">
            <h2>{{ props.title }}</h2>
            <IconX @click="props.closeModal" />
        </div>
        <!-- Modal content -->
        <div>
            <slot></slot>
        </div>
        <div class="flex flex-row content-end gap-2">
            <Button style="margin-left: auto" label="Gem" size="small" />
            <Button label="Annuller" color-way="error" size="small" />
        </div>
        <div>
        </div>
    </div>
</template>
