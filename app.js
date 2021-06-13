/**
 * Data structures
 * Helps us to manager lists of data
 */

// Arrays

{

    /**
     * Insertion order is kept
     * Element acess via index
     * Iterable (= you can use the for-of loop)
     * Size (length) adjusts dynamically
     * Duplicated values are allowed
     * Deletion and finding elements can require "extra work"
     */

    const names = [
        "Max", "Manu", "Julien", "Max"
    ]

    // Index starts at zero

    // console.log(names[1]);
    // Getting the length of array
    // console.log(names.length);

    // Iteration
    for(const el of names) {
        // console.log(el);
    }

    names.push("Super")
    // Getting the length of array
    // console.log(names.length);

    const julieIndex = names.findIndex(el => el === 'Julien');

    // console.log(julieIndex);

    names.splice(2, 1);

    // console.log(names);
    
}

// Sets
{
    const ids = new Set();

    ids.add('abc');
    ids.add('3');
    ids.add('juline');
    ids.add('juline');
    
    for(el of ids) {
        // console.log(el);
    }
    
    // console.log(ids.has('abc'));
    
    // console.log(ids);
    ids.delete("juline")
    
    // console.log(ids);
}

// Arrays vs Set


// Objects
{
    /**
     * Can have methods
     * Unordered key-value pairs of data
     * Element acess via key (property name)
     * Not iterable (only with for in)
     * Keys are unique, values are not
     * Keys have to be strings, numbers or symbols
     * Can store data and funcionality
     */

    const person = {
        firstName: 'Julien',
        age: 26,
        hobbies: [
            'Footbal', 'Singing'
        ],
        greet() {
            console.log("Hi, Iam " + this.firstName);
        }
    };

    person.lastName = "Kataleko"
    // delete person.age
    // console.log(person);
    // person.greet();
} 

// Maps
{
    /**
     * Order key values of pair
     * Element access via key
     * Iterable (= you can use the for-of loop)
     * Keys are unique, values are not
     * Keys can be anything include reference values like arrays
     * Pure data storage, optimized for data access
     */

    const resultData = new Map();

    resultData.set('average', 1.35)
    resultData.set('lastResult', null)

    const angola = {name: 'Angola', population: 32}

    resultData.set(angola, 0.45);

    for (const el of resultData) {
        // console.log(el);
    }

    resultData.set('average', 300);
    // console.log(resultData);

    // Not use dot notaion
    // console.log(resultData.get('average'));

    // Delete
    resultData.delete({name: 'Angola', population: 32})
    // console.log(resultData);
}

