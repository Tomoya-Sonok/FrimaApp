$(function(){

  $(document).on('turbolinks:load', function(){

    // $('.price-wrapper__price').on('keyup', function(){

    // });
 
    // 選択された画像を取得し表示
    $(document).on('change', '.js-file_group input', function(e) {
      // index = $fileField.index();
      var id = $('.img_field').attr('id').replace(/[^0-9]/g, '');
      // $('#img_field').attr({id: `img_field--${id}`});
      var file = e.target.files[0];
      var reader = new FileReader();
      var newImgId = `#img_field--${id}`;
      var preview = $(newImgId);
      preview.attr({id: `img_field--${id}`});
      reader.onload = (function(file) {
        return function(e) {
          preview.empty();
          preview.append($('<img>').attr({
            src: e.target.result,
            width: "100px",
            height: "100%",
            class: "preview",
            title: file.name
          }));
        };
      })(file);
      preview.removeClass('img_field');
      reader.readAsDataURL(file);
    });

    const buildFileField = function(index){
      const html = `<div class="image-wrapper__image-box__js js-file_group" data-index="${index}">
                      <label class="image-wrapper__image-box__js__label" for="item_images_attributes_${index}_content">
                        <div class="image-wrapper__image-box__js__label__image img_field" data-image="${index}" id="img_field--${index}" onclick="$('#file').click()">
                          <img class="image-wrapper__image-box__js__label__image__url" src="/assets/icon_camera-24c5a3dec3f777b383180b053077a49d0416a4137a1c541d7dd3f5ce93194dee.png">
                        </div>
                        <input class="image-wrapper__image-box__js__label__file js-file" id="item_images_attributes_${index}_content" type="file" name="item[images_attributes][${index}][content]">
                      </label>
                      <div class="js-remove">
                        <span class="js-remove__text">
                          削除
                        </span>
                      </div>
                    </div>`;
      return html;
    }

    var fileIndex = [1,2,3,4,5,6,7,8,9,10];

    $('#image-box').on('change', '.js-file', function(e){
      if($('.preview').length < 10) {
        $('#image-box').append(buildFileField(fileIndex[0]));
        fileIndex.shift();
        fileIndex.push(fileIndex[fileIndex.length - 1] + 1)
      }

      // var inputs = $('#image-box').find('.js-file')
      // console.log(inputs);
      // inputs.each( function( num, input ){
      // //nameの番号を更新するために、現在の番号を除去
        
      //   $(input).removeAttr('name');
      //   $(input).attr({
      //     name:"item[images_attributes][" + num + "][content][]",
      //     // id:"item_images_attributes_" + num + "_content file"
      //   });
      //   num += 1;
      //   // debugger;
      // });


    });


    

    

    $('#image-box').on('click', '.js-remove', function(){
      $(this).parent().remove();
      if ($('.js-file').length == 0)
        $('#image-box').append(buildFileField(fileIndex[0]));
    })
  })
})