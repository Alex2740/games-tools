<template>
  Theorycraft
  <div class="items-grid">
      <div v-for="item in items" :key="item.id">
        <img :src="imgItem(item)" :alt="item.name">
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import versionsJSON from '../assets/datadragon/versions.json'

export default {
    name: 'Theorycraft',
    setup() {
        // Get the current version
        const version = versionsJSON[0]

        // Get Champions Data
        const champions = ref([])
        import('../assets/datadragon/' + version + '/data/fr_FR/champion.json').then((res) => {
            Object.keys(res.data).forEach((el) => {
                champions.value.push(res.data[el])
            })
        })

        // Get Items Data
        const items = ref([])
        import('../assets/datadragon/' + version + '/data/fr_FR/item.json').then((res) => {
            Object.keys(res.data).forEach((id) => {
                let el = res.data[id]
                el.id = id
                items.value.push(el)
            })
        })

        // Computed Path Champion Image
        const imgChampion = (champion) => '/assets/datadragon/img/champion/' + champion.image.full

        //Computde Path Item Image
        const imgItem = (item) => '/assets/datadragon/img/item/' + item.image.full

        return {
            version,
            champions,
            items,
            imgChampion,
            imgItem
        }
    }
}
</script>

<style>
.items-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
    gap: 1rem;
}

.items-grid div img {
    width: 100%
}
</style>