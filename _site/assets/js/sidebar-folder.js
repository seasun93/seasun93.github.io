const depsHeight = [];

window.addEventListener('load',depsList)

function depsList(){
    const deps = document.querySelectorAll('.deps');
    const depsTitle = document.querySelectorAll('.deps-title');

    deps.forEach(function(el){
        depsHeight.push(el.scrollHeight);
    })
    depsTitle.forEach(function(el,i){
        el.addEventListener('click',function(){
            if(this.classList.contains('on')){
                removeAll()
            } else {
                deps[i].classList.add('on');
                deps[i].style.height = `${depsHeight[i]}px`;
                depsTitle[i].classList.add('on');
            }
        })
    })

    function removeAll(){
        for(let i = 0; i < deps.length; i++){
            deps[i].classList.remove('on');
            deps[i].style.height = `0px`;
            depsTitle[i].classList.remove('on');
        }
    }
    
}