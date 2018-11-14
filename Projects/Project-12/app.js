const itemlist = document.querySelector('#item-list');
const form = document.querySelector('#add-item-form');

// Create element and render
function renderItem(doc){
   // Create li and spans
   let li = document.createElement('li');
   let name = document.createElement('span');
   let type = document.createElement('span');
   let size = document.createElement('span');
   let amount = document.createElement('span');
   let cross = document.createElement('div');

   // Set li data-id attribute to doc.id
   li.setAttribute('data-id', doc.id);

   // Set name and city content to doc data
   name.textContent = doc.data().name;
   type.textContent = doc.data().type;
   size.textContent = doc.data().size;
   amount.textContent = doc.data().amount;
   cross.textContent = 'x';

   // Append name and city as children to the li
   li.appendChild(name);
   li.appendChild(type);
   li.appendChild(size);
   li.appendChild(amount);
   li.appendChild(cross);

   // Append li to the itemlist div
   itemlist.appendChild(li);

   // Deleting doc
   cross.addEventListener('click', (e) => {
      e.stopPropagation();
      let id = e.target.parentElement.getAttribute('data-id');
      db.collection('Medicine').doc(id).delete();
   })
}

// Grab data from collection, store in snapshot, go through all docs, for each doc call renderItem function
db.collection('Medicine').get().then((snapshot) => {
   snapshot.docs.forEach(doc => {
      renderItem(doc);
   })
});

// Saving data
form.addEventListener('submit', (e) => {
   e.preventDefault();
   db.collection('Medicine').add({
      name: form.name.value,
      type: form.type.value,
      size: form.size.value,
      amount: form.amount.value
   });
   // Clearing the form fields
   form.name.value = '';
   form.type.value = '';
   form.size.value = '';
   form.amount.value = '';
});
