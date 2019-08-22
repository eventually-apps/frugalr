<template>
    <div class="edit">
        <div class="wrapper">
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h3>Frugalr</h3>
                </div>
                <div class="component-selector overflow-auto">
                    <div class="col">
                        <invoice-header-input/>
                    </div>
                    <div class="col">
                        <email-input/>
                    </div>
                </div>
                <div class="submit-area">
                    <button type="button" @click="showModal('confirm')" class="btn btn-outline-success btn-lg btn-finish" style="margin-right: 15px;">Finish</button>
                    <button type="button" @click="showModal('cancel')" class="btn btn-outline-danger btn-lg btn-finish">Cancel</button>
                </div>
            </nav> <!-- Sidebar End -->
            <div class="content"> <!-- Form Builder Start -->
                <div class="form-template container-fluid">         
                    <invoice-header/>
                    <form>
                        <invoice-body/>
                    </form>    
                    <invoice-footer/>               
                </div>
            </div>  <!-- End Form Area -->
        </div>
     <modal v-if="isModalVisible" :msg="modalBody" :titlemsg="modalTitle" :successMsg="successMsg" :dangerMsg="dangerMsg" :modalType="modalType"  v-on:close="closeModal()" v-on:submitModal="submitModal"/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Modal from '@/components/Modal.vue';
import ModalService , { ModalType } from '../services/ModalService';
import InvoiceHeader from '@/components/InvoiceHeader.vue';
import InvoiceBody from '@/components/InvoiceBody.vue';
import InvoiceFooter from '@/components/InvoiceFooter.vue';
import InvoiceHeaderInput from '@/components/InvoiceHeaderInput.vue';
import EmailInput from '@/components/EmailInput.vue';
import Store from '../store';

const modalService = new ModalService();

@Component({
    components: {
        Modal,
        InvoiceHeaderInput,
        InvoiceHeader,
        InvoiceBody,
        InvoiceFooter,
        EmailInput,
    },
})
export default class EditTemplate extends Vue {
    @Prop() public modalBody!: string;
    @Prop() public modalTitle!: string;
    @Prop() public dangerMsg!: string;
    @Prop() public successMsg!: string;
    @Prop() public modalType!: string;

    public isModalVisible = false;

    public showModal(type: string) {
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

    public submitModal(type: string) {
        console.log(type);
        if (type === ModalType.Cancel) {
            this.$router.push('/');
        }

        if (type === ModalType.Confirm) {
            this.$router.push('/confirmation');
        }
    }
}
</script>


<style lang="scss">

.aaa {
    background-color: rgb(99, 99, 99);
    min-width: inherit;
    min-height: 10%;
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .3);
}

.col{
    margin-top: 5px;
}

.content{
    display: flex;
    margin: 5vh;
    width: 100vw;
    flex: 0 1 auto;
    align-content: center;
}

.form-template {
    position: relative;
    background-color: rgba(#f3f3f3, .5);
    margin-left: 20vw;
    margin-right: 18vw;
    flex: 0 auto;
    min-width: 38vw;
    border: 1px solid#363636;
}


.btn:hover {
    color: #ffffff;
    text-decoration: none;
}

.btn-link:active{
    text-decoration: none;
}

.card{
    background: #635a64;
    //box-shadow: inset 0 0 5rem rgba(0, 0, 0, .2);
}
.card-header{
    height: 55px;
}

.component-selector{
    //background: #c42d2d; //Temp
    min-height: 79vh;
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .3);
    // overflow-y: scroll;
}

.submit-area{
    position: fixed;
    bottom: 5px;
    padding: 25px;
    min-width: 375px;
    max-width: 375px;
}

h3 {
    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
}

@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
    }
    #sidebar.active {
        margin-left: 0;
    }
}

.wrapper {
    display: flex;
    align-items: stretch;
}

#sidebar {
    /* don't forget to add all the previously mentioned styles here too */
    background: #414040;
    color: #fff;
    transition: all 0.3s;
    min-width: 375px;
    max-width: 375px;
    min-height: 100vh;
}

#sidebar .sidebar-header {
    padding: 20px;
    background: #3e393f;
}

#sidebar ul.components {
    padding: 15px 0;
    align-content: center;
}

#sidebar ul p {
    color: #fff;
    padding: 5px;
}

#sidebar ul li a {
    padding: 5px;
    font-size: 1.1em;
    display: block;
}

</style>
