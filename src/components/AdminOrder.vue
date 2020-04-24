<template>
  <div>
    {{order}}
    {{this.$store.getters['admin/getOrderAddress'](order.pet_id)}}
  </div>
</template>

<script>
export default {
  props: ['order'],
}
</script>

<style lang="scss" scoped>

</style>