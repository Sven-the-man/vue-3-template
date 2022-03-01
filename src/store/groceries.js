import {reactive} from 'vue';

const state = reactive({
    groceries: [
        {id: 0, name: 'Appels', price: 1.82, amount: 4, editable: false},
        {id: 1, name: 'Peren', price: 1.66, amount: 3, editable: false},
    ],
});

export const getGroceriesFromStore = state.groceries;

export const addGroceryToList = grocery => state.groceries.push(grocery);

export const removeGroceryFromList = index => state.groceries.splice(index, 1);

export const editGroceryFromList = (id, editedGrocery) => {
    let foundIndex = state.groceries.findIndex(grocery => grocery.id == id);
    editedGrocery.id = id;
    state.groceries[foundIndex] = editedGrocery;
};

export const callGroceries = () => console.log(state.groceries);
