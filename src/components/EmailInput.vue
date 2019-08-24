<template>
   <div class="header-input container">
        <h5>Message:</h5>
        <hr>
        <div class="form-row">
            <textarea v-model="currentMessage" class="form-control msg-box" placeholder="Enter an optional message..."></textarea>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Store from '../store';

@Component
export default class EmailInput extends Vue {
    @Prop() public value!: string;

    get currentMessage() {
        return this.value;
    }
    set currentMessage(value) {
        this.$emit('input', value);
    }
}
</script>

<style lang="scss">
.msg-box {
    min-height: 200px;
    resize: none;
}
</style>