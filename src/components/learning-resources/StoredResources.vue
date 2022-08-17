<template>
    <ul v-if="resources.length !== 0">
        <learning-resource v-for="resource in resources" :key="resource.id" 
            :id="resource.id"
            :title="resource.title"
            :description="resource.description"
            :link="resource.link"
        ></learning-resource>
    </ul>
    <base-card v-else>
        <p>There aren't any resources stored yet...</p>
    </base-card>
</template>

<script>
import LearningResource from './LearningResource.vue';
export default {
    components: { LearningResource },
    computed: {
        resources(){
            return this.$store.getters.storedResources;
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        margin: auto;
        max-width: 40rem;
    }
</style>