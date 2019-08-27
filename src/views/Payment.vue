<template>
<div class="home">
    <div class="text-center payment">
        <h2>
            <i class="em-svg em-credit_card"/> Payment Information <i class="em-svg em-credit_card"/>
        </h2>
        <h4>
            Invoice For: {{ invoiceFor }}
        </h4>
        <h4>
            Amount Owed: ${{ invoiceAmount }}
        </h4>
        <br>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="firstName">First Name</label>
                <input v-model="firstName" type="text" class="form-control">
            </div>
            <div class="form-group col-md-6">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" >
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-8">
                <label for="ccnum">Card Number</label>
                <input type="text" class="form-control" maxlength="16" placeholder="ex. 1234 1234 1234 1234">
            </div>
            <div class="form-group col-md-4">
                <label for="cvc">CVC Number</label>
                <input type="number" class="form-control" maxLength="3" placeholder="ex. 123">
            </div>
        </div>
        <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" placeholder="1234 Main St">
        </div>
        <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" placeholder="Apartment, studio, or floor">
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group col-md-4">
                <label for="inputCity">State</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="number" maxLength="5" class="form-control">
            </div>
        </div>
        <div class="form-group col-md-12">
            <button type="button" class="btn btn-outline-success btn-lg" @click="showModal('payment')">Submit</button>
        </div>
    </div>
    <modal v-if="isModalVisible" :msg="modalBody" :titlemsg="modalTitle" :successMsg="successMsg" :dangerMsg="dangerMsg" :modalType="modalType" :paymentDetails="details" v-on:close="closeModal()" v-on:submitModal="submitModal"/>
</div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import Store from '../store';
import FormService from '../services/FormService';
import { PaymentDetails } from '../models/PaymentDetails';
import Modal from '@/components/Modal.vue';
import ModalService , { ModalType } from '../services/ModalService';

const modalService = new ModalService();
const formService = new FormService();

@Component({
    components: {
        Modal,
    },
})
export default class Payment extends Vue {
    @Prop() public details: PaymentDetails = new PaymentDetails();

    public modalBody: string = '';
    public modalTitle: string = '';
    public dangerMsg: string = '';
    public successMsg: string = '';
    public modalType: string = '';
    public isModalVisible = false;
    public message: string = '';
    @Prop() private id!: string;

    private firstName: string = '';
    private lastName: string = '';
    private ccNumber: string = '';
    private cvcNum: string = '';
    private address1: string = '';
    private address2: string = '';
    private city: string = '';
    private state: string = '';
    private zip: number = 12345;


    private invoiceAmount: number = 0.0;
    private invoiceFor: string = '';

    public submitPayment(type: string): void {

    this.details.firstName = this.firstName;
    this.details.lastName = this.lastName;
    this.details.address1 = this.address1;
    this.details.address2 = this.address2;
    this.details.ccNumber = this.ccNumber;
    this.details.cvcNumber = this.cvcNum;
    this.details.city = this.city;
    this.details.state = this.state;
    this.details.zip = this.zip;

    this.showModal(type, this.details);
    }

    public showModal(type: string, details: PaymentDetails) {
        const buttons = modalService.GetModalButtons(type);
        this.modalType = type;
        this.modalTitle = modalService.GetModalTitle(type);
        this.modalBody = modalService.GetModalMessage(type);
        this.dangerMsg = buttons.danger;
        this.successMsg = buttons.success;
        this.isModalVisible = true;
    }

    public closeModal() {
        this.isModalVisible = false;
    }

    public submitModal() {
        this.$router.push('/');
    }

    private async mounted() {
        const data = await Store.dispatch('getInvoice', this.id);
        const invoice = data.data();
        this.invoiceAmount = invoice.invoiceAmount;
        this.invoiceFor = invoice.recipientName;
    }
}
</script>

<style lang="scss">
html, body{
  height: 100%;
}
body {
  display: flex;  
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
  height: 100% !important;
  width: 100% !important;
}
.home{
    height:100%;
    padding: 0 1.5rem;
}

h2 {
    color: #ffffff;
}

.payment {
    height:100%;
    padding-top: 8em;
    padding-left: 20vw;
    padding-right: 20vw;
    color: #ffffff;
}
</style>