$(function(){
  function appendOption(category){
    var html = `<option value="${category.id}" data-category="${category.id}">${category.name}</option>`;
    return html;
  }
  function appendChidrenBox(insertHTML){
    var childSelectHtml = '';
    childSelectHtml = `<div class='category-wrapper-select' id= 'children_wrapper'>
                        <div class='category-wrapper-select__box'>
                          <select class='category-wrapper__category form-control' id="child_category" name="category_id" style = "width: 100%; height: 24px;">
                            <option value="指定なし" data-category="指定なし">指定なし</option>
                            ${insertHTML}
                          <select>
                        </div>
                      </div>`;
    $('.category-wrapper-box').append(childSelectHtml);
  }
  function appendGrandchidrenBox(insertHTML){
    var grandchildSelectHtml = '';
    grandchildSelectHtml = `<div class='category-wrapper-select' id= 'grandchildren_wrapper'>
                              <div class='category-wrapper-select__box'>
                                <select class='category-wrapper__category form-control' id="grandchild_category" name="category_id" style = "width: 100%; height: 24px;">
                                  <option value="指定なし" data-category="指定なし">指定なし</option>
                                  ${insertHTML}
                                <select>
                              </div>
                            </div>`;
    $('.category-wrapper-box').append(grandchildSelectHtml);
  }
  $('#parent_category').on('change', function(){
    var parentCategory = document.getElementById('parent_category').value;
    if (parentCategory != "指定なし" ){
      $.ajax({
        url: 'get_category_children',
        type: 'GET',
        data: { parent_name: parentCategory },
        dataType: 'json'
      })
      .done(function(children){
        $('#children_wrapper').remove(); 
        $('#grandchildren_wrapper').remove();
        var insertHTML = '';
        children.forEach(function(child){
          insertHTML += appendOption(child);
        });
        appendChidrenBox(insertHTML);
      })
      .fail(function(){
        alert('カテゴリー取得に失敗しました');
      })
    }else{
      $('#children_wrapper').remove();
      $('#grandchildren_wrapper').remove();
    }
  });
  $('.wrapper.category-wrapper').on('change', '#child_category', function(){
    var childId = $('#child_category option:selected').data('category'); 
    if (childId != "指定なし"){ 
      $.ajax({
        url: 'get_category_grandchildren',
        type: 'GET',
        data: { child_id: childId },
        dataType: 'json'
      })
      .done(function(grandchildren){
        if (grandchildren.length != 0) {
          $('#grandchildren_wrapper').remove();
          var insertHTML = '';
          grandchildren.forEach(function(grandchild){
            insertHTML += appendOption(grandchild);
          });
          appendGrandchidrenBox(insertHTML);
        }
      })
      .fail(function(){
        alert('カテゴリー取得に失敗しました');
      })
    }else{
      // $('#children_wrapper').remove();
      $('#grandchildren_wrapper').remove();
    }
  });
});
