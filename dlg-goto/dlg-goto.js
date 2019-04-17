/* exported $dlgGoto*/
var $dlgGoto=(function(){
  var $dlg=$(''

  /*var init=function(){
    //DOM绘制
    //事件绑定
    var DOM=''*/

    +'<div class="notepad-goto-dlg">'
    +' <div class="dialogbox">'
    +'  <div class="titlebar">'
    +'    <p class="title">转到指定行</p>'
    +'    <span class="btn-close">X</span>'
    +'  </div>'
    +'  <div class="main">'
    +'    <label for="">行号(L):</label><br>'
    +'    <input type="text" class="line-num" autofocus><br>'
    +'    <input class="btn-goto" type="button" value="转到">'
    +'    <input class="btn-cancel"  type="button" value="取消">'
    +'  </div>'
    +' </div>'
    +'</div>');

    

  // var $dlg=$(DOM);
   


  var $btnClose=$dlg.find('.btn-close');                      
  var $btnCancel=$dlg.find('.btn-cancel');
  var $txtLineNum=$dlg.find('.line-num');
  var $titleBar=$dlg.find('.titlebar');
  var $btnGoto=$dlg.find('.btn-goto');
  




  var cfg={
    curLine:1,
    totalLines:1,
    gotoHandler:null

  };

  function destory(){$dlg.remove();}

  function validation(){
    var num=Number($txtLineNum.val());
    if(num===0 || num>cfg.totalLines){
      alert('行数超过了总行数');
      return false;
    }
    return true;
  }

  function gotoHandler(){
    if(!validation()) return;

    cfg.gotoHandler($txtLineNum.val());
    destory();
  }


  function filterKey(e) {
    if(!/[0-9]/.test(e.key)) {
      e.preventDefault();
      alert('不能输入数字以外字符');
      //showErrMsg();
    }
  }
    
  var init=function(conf){
    $.extend(cfg,conf);

    $('body').append($dlg);
    $dlg.find('.dialogbox').draggable({handle:$titleBar});

    $txtLineNum.val(cfg.curLine);
    $txtLineNum.select();

    $btnClose.click(destory);
    $btnCancel.click(destory);
    $btnGoto.click(gotoHandler);
    $txtLineNum.keypress(filterKey);//字符校验
    
  };
  return {init:init};

})();



