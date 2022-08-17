export default {
    addResource(context, payload){
        context.commit('addResource', payload);
        
    },
    removeResource(context, resourceID){
        context.commit('removeResource', resourceID);
    }
};