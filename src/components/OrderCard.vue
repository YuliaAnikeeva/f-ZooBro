<template>
  <div>
    <span>Order # {{orderId}}</span>
  </div>
</template>

<script>
export default {
  props: {
    orderId: Number,
  }
}
</script>