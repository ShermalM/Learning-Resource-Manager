<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode" >Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode" >Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
    components: { StoredResources, AddResource },
    data(){
        return{
            selectedTab: 'stored-resources',
        };
    },
    methods: {
        setSelectedTab(tab){
            this.selectedTab = tab;
        },
    },
    computed: {
        storedResButtonMode(){
            return this.selectedTab === 'stored-resources' ? '' : 'flat';
        },
        addResButtonMode(){
            return this.selectedTab === 'add-resource' ? '' : 'flat';
        }
    },
    provide(){
        return {
            setSelectedTab: this.setSelectedTab
        };
    }
}
</script>