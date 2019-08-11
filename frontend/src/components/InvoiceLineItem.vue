<template>
  <div class="form-row container-fluid">
    <div class="col">
        <input type="text" class="form-control" placeholder="">
    </div>
    <div class="col-3 pull-right">
      <input type="text" class="form-control" placeholder="0.00">
    </div>
    <button type="button" class="btn btn-outline-danger remove-line"><i class="fa fa-minus"></i></button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LineItem extends Vue {}
</script>

<style lang="scss">
.btn:hover {
  color: #ffffff;
}

.form-row{
  margin-top: 8px;
}
</style>

