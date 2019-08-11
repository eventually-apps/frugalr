<template>
    <div class="container-fluid">
        {{recipEmail}}
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Store from '../store';

@Component
export default class InvoiceHeader extends Vue{
    private get recipEmail(): string {
        return Store.state.recipientEmail;
    };
}
</script>


<style >

</style>