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
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Collapsible Group 1</a>
                                </h4>
                            </div>
                            <div id="collapse1" class="panel-collapse collapse in">
                                <div class="panel-body">
                                    Blah
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Collapsible Group 2</a>
                                </h4>
                            </div>
                            <div id="collapse2" class="panel-collapse collapse">
                                <div class="panel-body">
                                    Blah
                                </div>
                            </div>
                        </div>
                    </div>           
                </div> <!--End Accordion -->
                <div class="submit-area">                  
                    <button v-on:click="cancelModal()" type="button" class="btn btn-outline-danger btn-lg">Cancel</button>                    
                    <button type="button" class="btn btn-outline-success btn-lg">Finish</button>  
                </div>
            </nav>
        </div>
        <div class="content">
            
        </div>     
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CancelModal from './components/CancelModal.vue';

@Component
export default class EditTemplate extends Vue {
    public cancelModal(): any {
        window.alert('ADD SOME REAL FUNCTIONALITY HERE');
    }
}
</script>


<style lang="scss">
.btn{
    margin: 10px;
}

.card{
    max-height: 100px !important;
    background: #474747;
    //box-shadow: inset 0 0 5rem rgba(0, 0, 0, .2);
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
    background: #383838;
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
