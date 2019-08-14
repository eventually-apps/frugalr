<template>
    <div class="header-input container">
        <h5>Bill To:</h5>
        <hr>
        <div class="form-row">
            <div class="form-group col-md-6">
                <input type="text" class="form-control" @input="firstNameListen" v-model="toFirstName" placeholder="First Name">
            </div>
            <div class="form-group col-md-6">
                <input type="text" class="form-control" @input="lastNameListen" v-model="toLastName" placeholder="Last Name">
            </div>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" @input="recipEmailListener" v-model="rEmail" placeholder="Recipent Email">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" @input="userEmailListen" v-model="userEmail" placeholder="Your Email">
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
    private toFirstName: string = '';
    private toLastName: string = '';

    public recipEmailListener(): void {
        Store.commit('changeRecipEmail', this.rEmail);
    }

    public firstNameListen(): void {
        Store.commit('changeToFirstName', this.toFirstName);
    }

    public lastNameListen(): void {
        Store.commit('changeToLastName', this.toLastName);
    }

    public userEmailListen(): void {
        Store.commit('changeUserEmail', this.userEmail);
    }
}
</script>

<style lang="scss">
.header-input{
    margin-top: 15px;
}
</style>