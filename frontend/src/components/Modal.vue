<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-header">
        <slot name="header">
          <h4>{{titlemsg}}</h4>
        </slot>
      </div>
      <section class="modal-body">
        <slot name="body">
          {{msg}}
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn btn-outline-success" >{{successMsg}}</button>
            <button type="button" class="btn btn-outline-danger" @click="close">{{dangerMsg}}</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Modal extends Vue {
  @Prop({default: 'hello'}) public titlemsg!: string;
  @Prop({default: 'no'}) public msg!: string;
  @Prop() public successMsg!: string;
  @Prop() public dangerMsg!: string;

  private isVisible = true;

  public close(): void {
    this.$emit('close');
  }
}
</script>


<style lang="scss">
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    justify-content: center;
    align-items: center;
  }

   .modal-body {
    position: relative;
    padding: 20px 10px;
    color: #ffffff;
  }

  .modal {
    background: #414040;
    box-shadow: 2px 2px 20px 1px;
    display: flex;
    flex-direction: column;
    z-index: 1;  
    max-width: 30vw;
    max-height: 36vh;
    position: fixed;
    top: 20%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 1%;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
    text-align: center;
    font-weight: bold;
  }

  .modal-header {
    border-bottom: 1px solid rgba(#2b2b2b, .7);
    color: rgb(255, 255, 255);
    justify-content: center;
  }

  .modal-footer {
    border-top: 1px solid rgba(#2b2b2b, .7) !important;
    justify-content: flex-end;
  }

  .modal-content {
    position: relative;
    padding: 20px 10px;
  }
</style>