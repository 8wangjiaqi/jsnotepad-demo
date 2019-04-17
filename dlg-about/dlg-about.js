/* exported $dlgAbout*/
var $dlgAbout=(function(){
  var init=function(){
    var DOM = ''
      + '<div class="notepad-dlg-about">'
      + ' <div class="dialogbox">'
      + '   <div class="titlebar">'
      + '     <p class="title">关于“记事本”</p>'
      + '     <span class="close-btn">✖</span>'
      + '   </div>'
      + '   <div class="main">'
      + '     <h1 class="slogan">JSNotepad</h1>'
      + '     <hr style="width:570px">'
      + '     <img class="app-logo" src="about.png" alt="JSNotepad">'
      + '     <div class="info">'
      + '       <p>作者：王佳琦</p>'
      + '       <p>QQ：1397978384</p>'
      + '       <p>仓库地址：<a href="https://github.com/wangding/jsnotepad/" target="_blank">https://github.com/8wangjiaqi/jsnotepad/</a></p>'
      + '     </div>'
      + '     <input class="btn-ok btn" type="button" value="确定">'
      + '   </div>'
      + ' </div>'
      + '</div>';




    var $dlg = $(DOM);
    var $btnOk = $dlg.find('.btn-ok');
    var $btnClose = $dlg.find('.close-btn');
  
    $('body').append($dlg);
    $dlg.find('.dialogbox').draggable({handle: $dlg.find('.titlebar')});

    $btnOk.click(function() { 
      $dlg.remove();  
    });
    $btnClose.click(function() { 
      $dlg.remove();  
    });
  
  };


  return {init:init};
})();



