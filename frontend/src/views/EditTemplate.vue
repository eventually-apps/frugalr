<template>
    <div class="edit">
        <div class="wrapper">
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h3>Frugalr</h3>
                </div>
                <ul class="list-unstyled components">
                    <p>Dummy Heading</p>               
                </ul>
            </nav>
        </div>
        <div class="content">
            
        </div>     
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class EditTemplate extends Vue {}
</script>


<style lang="scss">
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
    padding: 20px 0;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}

</style>
