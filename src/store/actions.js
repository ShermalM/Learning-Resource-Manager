export default {
    addResource(context, payload){
        context.commit('addResource', payload);
        localStorage.setItem('storedResources', JSON.stringify(context.getters.storedResources));
    },
    removeResource(context, resourceID){
        context.commit('removeResource', resourceID);
        localStorage.setItem('storedResources', JSON.stringify(context.getters.storedResources));
    },
    loadResources(context, resources){
        context.commit('loadResources', resources);
    }
};