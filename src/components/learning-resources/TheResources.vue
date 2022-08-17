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
            // storedResources: [
            //     {
            //         id: 'official-guide',
            //         title: 'Official Guide',
            //         description: 'The official Vue.js documentation.',
            //         link: 'https://vuejs.org'
            //     },
            //     {
            //         id: 'google',
            //         title: 'Google',
            //         description: 'Learn to google...',
            //         link: 'https://google.org'
            //     }
            // ]
        };
    },
    methods: {
        setSelectedTab(tab){
            this.selectedTab = tab;
        },
        // addResource(title, description, link){
        //     const newResource = {
        //         id: new Date().toISOString(),
        //         title,
        //         description,
        //         link
        //     };
        //     this.storedResources.unshift(newResource);
        //     localStorage.setItem('storedResources', JSON.stringify(this.storedResources));
        //     this.selectedTab = 'stored-resources';
        // },
        // removeResource(resourceID){
        //     const resourceIndex = this.storedResources.findIndex(resource => resource.id === resourceID);
        //     this.storedResources.splice(resourceIndex, 1);
        //     localStorage.setItem('storedResources', JSON.stringify(this.storedResources));
        // },
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
    },
    // created(){
    //     const storedResources = JSON.parse(localStorage.getItem('storedResources'));
    //     console.log(this.storedResources);
    //     if(storedResources){
    //         console.log(storedResources);
    //         this.storedResources = storedResources;
    //         console.log(this.storedResources);
    //     }
    // }
}
</script>