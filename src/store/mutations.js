export default {
    addResource(state, payload){
        const newResource = {
            id: new Date().toISOString(),
            title: payload.title,
            description: payload.description,
            link: payload.link
        };
        state.storedResources.unshift(newResource);
    },
    removeResource(state, resourceID){
        const resourceIndex = state.storedResources.findIndex(resource => resource.id === resourceID);
        state.storedResources.splice(resourceIndex, 1);
        localStorage.setItem('storedResources', JSON.stringify(this.storedResources));
    },
    loadResources(state, resources){
        state.storedResources = resources;
    }
};