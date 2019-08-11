<template>
    <div class="header-input">
        <div class="col">
            <label for="recipient-email">Recipient's Email</label>
            <input type="text" id="recipient-email" class="form-control" @input="recipEmailListener" v-model="rEmail">
        </div>      
        <div class="col">
            <label for="user-email">Your Email</label>
            <input type="text" id="user-email" class="form-control" placeholder="">
        </div> 
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Store from '../store';

@Component
export default class InvoiceHeaderInput extends Vue {
    private rEmail: string = '';
    private userEmail: string = '';
    
    public recipEmailListener(): void {
        Store.commit('changeRecipEmail', this.rEmail);
    }
}
</script>