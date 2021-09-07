<template>
  <div>
    <div>Dental Component</div>
    <section>
      <ul>

      </ul>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  name: 'Dental',
  setup() {
    let dentalData = ref({})

    onMounted(() => {
      dentalData = getDentalData().catch(err => {
        console.log(err)
      })

      console.log(dentalData)
    })

    const getDentalData = async () => {
      const response = await fetch('/testData/DentalInsurance.json')
      if (response.ok && response.status === 200) {
        return await response.json()
      }

      throw new Error('Data fetching failed')
    }

    return { dentalData }
  }
}
</script>

<style>

</style>