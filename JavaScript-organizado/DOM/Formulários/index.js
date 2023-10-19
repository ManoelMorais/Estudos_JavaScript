const form = document.forms.namedItem('infros')

form.addEventListener('input', (event) => {
    event.preventDefault();

    const name = form.name.value;
    const password = form.password.value;


    // aula 02
    const formData = new FormData(form)
     if(formData.has("name") || formData.has("password")){
         console.log(formData.get("name"))
         console.log(formData.get("password"))  
     } else {
         console.log(formData.delete("name"))
         console.log(formData.delete("password")) 
     }
    
    // aula 01
     if(name && password){
         console.log(name, password)
         form.submit();
     };

    // aula 03
    const newDivElement = document.createElement('div')
    newDivElement.innerText = name

    form.nextElementSibling.remove()
    form.after(newDivElement)
})