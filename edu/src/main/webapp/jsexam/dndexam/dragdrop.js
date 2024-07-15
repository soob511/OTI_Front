var source, drop;
function initiate(){
  source=document.getElementById('image');
  source.addEventListener('dragstart', dragged, false);

  drop=document.getElementById('dropbox');
  drop.addEventListener('dragover', function(e){ e.preventDefault(); }, false);
  drop.addEventListener('drop', dropped, false);
}
function dragged(e){
  var code='<img src="'+source.getAttribute('src')+'">';
  e.dataTransfer.setData('Text', code);//dataTransfer 객체에 담음
}
function dropped(e){
  e.preventDefault();
  drop.innerHTML=e.dataTransfer.getData('Text');
}
window.addEventListener('load', initiate, false);