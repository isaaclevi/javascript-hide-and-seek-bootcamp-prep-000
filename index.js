//javascript-hide-and-seek-bootcamp-prep-000


var getQuerySelector = (element) => {
  var ArraySelector = ['div' , 'p' , 'id' , 'ul' , 'li' , 'i' , 'meta' , 'link' ];
  for(let i = 0 ; i < ArraySelector.length ; i++) {
      if(element.querySelector(ArraySelector[i]) !== 'undefined')
          return element.querySelector(ArraySelector[i]);
}}

var getFirstSelector = (selector) => {
    var html = document;
    return html.querySelector(selector);  
}

var nestedTarget = () => {
    var element = document.getElementById('nested');
    while(element.getAttribute('class') !== 'target') {
          element = getQuerySelector(element);
    }
    return element;
}

var increaseRankBy = (n) => {
    var elements = document.querySelectorAll("ul");;
    for(let i = 0 ; i < elements.length ; i++ )
    {
      if(elements[i].getAttribute('class') === 'ranked-list')
      {
        var list = elements[i].querySelectorAll('ul.ranked-list li')
        for(let j = 0 ; j < list.length ; j++)
        {
          list[j].innerHTML = (parseInt(list[j].innerHTML) + n).toString();
        }
      }
    }
}

var deepestChild = () => {
    var element = document.getElementById('grand-node')
    debugger
    while(getQuerySelector(element) != undefined) {
      element = getQuerySelector(element);
    }
    return element;
}