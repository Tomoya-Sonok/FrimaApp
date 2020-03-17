crumb :root do
  link "トップページ", root_path
end

crumb :mypage do
  link "マイページ", users_path
  parent :root
end

crumb :card_new do
  link "支払い情報の登録", new_card_path
  parent :mypage
end

crumb :card_show do
  link "支払い情報の確認", card_index_path
  parent :mypage
end

crumb :item_new do
  link "出品ページ", new_item_path
  parent :root
end

crumb :item_show do
  link "商品の詳細", item_path(:id)
  parent :root
end

crumb :item_confirm do
  link "購入の確認", confirm_item_path
  parent :item_show
end

crumb :item_edit do
  link "商品の編集", edit_item_path
  parent :item_show
end