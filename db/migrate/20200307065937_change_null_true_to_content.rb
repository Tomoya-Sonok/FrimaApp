class ChangeNullTrueToContent < ActiveRecord::Migration[5.2]
  def change
    change_column_null :images, :content, from: false, to: true
  end
end
