(function() {
    var addBtn = document.getElementById('add');
    addBtn.addEventListener('click', btnClick);

})();

var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" width="408.483px" height="408.483px" viewBox="0 0 408.483 408.483"style="enable-background:new 0 0 408.483 408.483;" xml:space="preserve"><g><path class="fill" d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z" /><path class="fill" d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z" /></g></svg>';
var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"xml:space="preserve"><g><path class="fill" d="M437.019,74.98C388.667,26.629,324.38,0,256,0C187.619,0,123.331,26.629,74.98,74.98C26.628,123.332,0,187.62,0,256s26.628,132.667,74.98,181.019C123.332,485.371,187.619,512,256,512c68.38,0,132.667-26.629,181.019-74.981C485.371,388.667,512,324.38,512,256S485.371,123.333,437.019,74.98z M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z" /></g><g><path class="fill" d="M378.305,173.859c-5.857-5.856-15.355-5.856-21.212,0.001L224.634,306.319l-69.727-69.727c-5.857-5.857-15.355-5.857-21.213,0c-5.858,5.857-5.858,15.355,0,21.213l80.333,80.333c2.929,2.929,6.768,4.393,10.606,4.393c3.838,0,7.678-1.465,10.606-4.393l143.066-143.066C384.163,189.215,384.163,179.717,378.305,173.859z" /></g></svg>';


function btnClick(e) {
    var target = e.target;
    console.log(target);
    
    var input = document.getElementById('item');

    // var inputValue = document.getElementById('item').value;
    if (input.value) {
        addItem(input.value);
        input.value = "";
    }
}

function addItem(value) {
    var list = document.getElementById('todo');

    var li = document.createElement('li');
    li.innerText = value;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSVG;
    remove.addEventListener('click', removeItem);

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeSVG;
    complete.addEventListener('click', markComplete);

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    li.appendChild(buttons);

    list.insertBefore(li, list.childNodes[0]);
}

function removeItem() {
    var listItem = this.parentNode.parentNode;
    var list = listItem.parentNode;
    list.removeChild(listItem);
}

function markComplete() {
    var listItem = this.parentNode.parentNode;
    var list = listItem.parentNode;
    var id = list.id;
    // console.log(id);
    var target = (id === 'todo') ? document.getElementById('completed') : document.getElementById('todo');

    list.removeChild(listItem);
    target.insertBefore(listItem, target.childNodes[0]);

    console.log(target);
}