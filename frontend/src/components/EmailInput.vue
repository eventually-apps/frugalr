<template>
   <div class="header-input container">
        <h5>Message:</h5>
        <hr>
        <div class="form-row">
            <textarea class="form-control msg-box" placeholder="Enter an optional message you'd like to say..."></textarea>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Store from '../store';

@Component
export default class EmailInput extends Vue {}
</script>

<style lang="scss">
.msg-box {
    min-height: 200px;
    resize: none;
}
</style>