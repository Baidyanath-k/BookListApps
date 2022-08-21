function getInputCollection(inputId) {
    let getInput=document.getElementById(inputId);
    let inputValue=getInput.value;
    getInput.value='';
    return inputValue;
}
document.getElementById('add-book').addEventListener('click', function(event){
    event.preventDefault();

    let titleValue=getInputCollection('title');
    let autherValue=getInputCollection('author');
    let yearValue=getInputCollection('year');

    if (titleValue=='' || autherValue=='' || yearValue=="") {
        alert("Please Input Value");
    }else{
        let createTr=document.createElement('tr');

        let createTitle=document.createElement('th');
        createTitle.innerHTML=titleValue;
        createTr.appendChild(createTitle);



        let createAuthor=document.createElement('th');
        createAuthor.innerHTML=autherValue;
        createTr.appendChild(createAuthor);



        let createYear=document.createElement('th');
        createYear.innerHTML=yearValue;
        createTr.appendChild(createYear);


        let bookList=document.getElementById('book-list');
        bookList.appendChild(createTr);

    }
})