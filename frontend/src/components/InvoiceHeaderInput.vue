<template>
    <div class="header-input container">
        <div class="recip-info">
            <h5>Bill To:</h5>
            <hr>
            <div class="form-row col">
                <div class="col-md-6">
                    <label>First Name</label>
                    <input type="text" class="form-control">
                </div>
                <div class="col-md-6">
                    <label>Last Name</label>
                    <input type="text" class="form-control">
                </div>
            </div>
            <div class="col">
                <label for="recipient-email">Email</label>
                <input type="email" id="recipient-email" class="form-control" @input="recipEmailListener" v-model="rEmail">
            </div>     
        </div>
        <div class="user-info">
            <div class="col">
                <label for="user-email">Your Email</label>
                <input type="email" id="user-email" class="form-control" placeholder="">
            </div> 
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

<style lang="scss">
.col{
    margin: 5px;
}

.user-info{
    margin-top: 10px;
}

.header-input{
    margin-top: 15px;
}
</style>