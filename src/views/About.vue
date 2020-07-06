<template>
  <div class="about">
  <Passwordvalid/> <hr/>
  <Collectionsvalid/>
  </div>
</template>

<script>
import Passwordvalid from '@/components/Passwordvalid.vue'
import Collectionsvalid from '@/components/Collectionsvalid.vue'
export default {
  name: 'about',
  components: {
    Passwordvalid,
    Collectionsvalid
  }
}
</script>
