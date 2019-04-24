/* exported $menubar*/
var $menubar = (function() {

  var $DOM=$(''
    +'<div class="notepad-menubar">'
    +'  <ul class="titles"></ul>'
    +'</div>');



  var $titles=$DOM.find('.titles');
  var menuData=null;  // 所有菜单数据


  /* 下拉菜单是否展开，没有展开为：-1
   ** 展开为：n，n 代表展开的是第几个菜单
   ** 0 是文件菜单，1 是编辑菜单，2 是格式菜单
   ** 3 是查看菜单，4 是帮助菜单 
  */


  
  function createTitles() {

    for(var i=0; i<menuData.length; i++) {
      var $title = $('<li class="menu-title"></li>');
      $title.html(menuData[i].title);
      $titles.append($title);
    }

  }



  function createMenus() {
    for(var i=0; i<menuData.length; i++) {
      var items = menuData[i].menuItems;
      var $menu=$('<ul class="menus"></ul>');


      for(var j=0; j<items.length; j++) {

        if(items[j].title === 'hr') {
          var $hr = $('<li class="menu-hr"></li>');
          $menu.append($hr);
          continue;
        }


        var $item=$('<li class="menu-item"></li>');
        $item.html(items[j].title);

        if(!items[j].enabled) $menu.addClass('disabled');

        if(items[j].shortcut !== '') {
          var $shorcut = $('<span class="shortcut"></span>');
          
          $shorcut.html(items[j].shortcut);
          $menu.append($shorcut);
        }

        $menu.append($item);
      }

      $menu.css({
        width: menuData[i].width,
        left: menuData[i].left,
        //display: 'none'
      });

      $DOM.append($menu);
    }
  }

  
  function show(data) {
    menuData = data;
    $('body').append($DOM);
    createTitles();
    createMenus();
  }

  return {
    show: show,
  };

}());



