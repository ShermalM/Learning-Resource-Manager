<template>
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError" >
        <template #default >
            <p>Unfortunately, atleast one input value is invalid.</p>
            <p>Please check all inputs and make sure you enter atleast a few characters into each input field.</p>
        </template>
        <template #actions > 
            <base-button @click="confirmError" >Okay</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitData" >
            <div class="form-control" >
                <label for="title">Title</label>
                <input id="title" name="title" type="text" v-model="enteredTitle" >
            </div>
            <div class="form-control" >
                <label for="description">Description</label>
                <textarea name="description" id="description" rows="3" v-model="enteredDescription" ></textarea>
            </div>
            <div class="form-control" >
                <label for="link">Link</label>
                <input id="link" name="link" type="url" v-model="enteredURL" >
            </div>
            <div>
                <base-button type="submit" >Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
export default {
    inject: ['addResource'],
    data(){
        return {
            inputIsInvalid: false,
            enteredTitle: '',
            enteredDescription: '',
            enteredURL: ''
        };
    },
    methods: {
        submitData(){

            if(this.enteredTitle.trim() === '' || this.enteredDescription.trim() === '' || this.enteredURL.trim === ''){
                this.inputIsInvalid = true;
                return;
            }           
            this.addResource(this.enteredTitle, this.enteredDescription, this.enteredURL);
            this.enteredTitle = '';
            this.enteredDescription = '';
            this.enteredURL = '';
        },
        confirmError(){
            this.inputIsInvalid = false;
        }
    }
}
</script>

<style scoped>
    label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
    }

    input,
    textarea {
        display: block;
        width: 100%;
        font: inherit;
        padding: 0.15rem;
        border: 1px solid #ccc;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: #3a0061;
        background-color: #f7ebff;
    }

    .form-control {
        margin: 1rem 0;
    }
</style>