<template>
    <div class="edit">
        <div class="wrapper">
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h3>Frugalr</h3>
                </div>        
                <div class="component-selector overflow-auto">
                    <ul class="list-unstyled components">
                        <p>Build your invoice!</p>              
                    </ul>             
                    <div class="panel-group" id="accordion">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse"  data-target="#collapse1">Group 1</button>
                                </h4>
                            </div>
                            <div id="collapse1" class="collapse" data-parent="#accordion">
                                <div class="card-body">
                                    Blahsdfsdfsdfs fsdfsdfs
                                </div>
                            </div>
                        </div> <!-- End 1 -->
                        <div class="card">
                            <div class="card-header">
                                <h4 class="mb-0">
                                    <button  class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse2">Group 2</button>
                                </h4>
                            </div>
                            <div id="collapse2" class="collapse" data-parent="#accordion">
                                <div class="card-body">
                                    Blah
                                </div>
                            </div>
                        </div> <!-- End 2 -->
                        <div class="card">
                            <div class="card-header">
                                <div class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse3">Group 3</button>
                                </div>
                            </div>
                            <div id="collapse3" class="collapse" data-parent="#accordion">
                                <div class="card-body">
                                    Blah
                                </div>
                            </div>
                        </div> <!-- End 3 -->
                    </div>           
                </div> <!--End Accordion -->
                <div class="submit-area">                  
                    <button type="button" @click="showModal('cancel')" class="btn btn-outline-danger btn-lg btn-finish">Cancel</button>                    
                    <button type="button" class="btn btn-outline-success btn-lg btn-finish">Finish</button>  
                </div>
            </nav> <!-- Sidebar End -->
            <div class="content"> <!-- Form Builder Start -->   
                <div class="form-template">
                </div>             
            </div>  <!-- End Form Area -->            
        </div>
     <modal v-if="isModalVisible" :msg="modalBody" :titlemsg="modalTitle"  v-on:close="closeModal()"/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Modal from '@/components/Modal.vue';
import ModalService , { ModalType } from '../services/ModalService';

const modalService = new ModalService();

@Component({
    components: {
        Modal,
    },
})

export default class EditTemplate extends Vue {
    @Prop() public modalBody!: string;
    @Prop() public modalTitle!: string;

    public isModalVisible = false;

    public showModal(type: string) {
        this.modalTitle = modalService.GetModalTitle(type);
        this.modalBody = modalService.GetModalMessage(type);
        this.isModalVisible = true;
    }

    public closeModal() {
        this.isModalVisible = false;
    }
}
</script>


<style lang="scss">

.content{
    display: flex;
    margin: 5vh;
    width: 100vw;
    flex: 0 1 auto;
    align-content: center;
}

.form-template {
    position: relative;
    background-color: rgba(#f3f3f3, .7);
    margin-left: 20vw;
    margin-right: 18vw;
    flex: 0 auto;
    width: 35vw;
    border: 1px solid#363636;    
}


.btn-link{
    color:#fff;
    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
}

.btn:hover {
    color: #383838;
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
