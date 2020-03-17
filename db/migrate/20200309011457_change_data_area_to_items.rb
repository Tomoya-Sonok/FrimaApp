class ChangeDataAreaToItems < ActiveRecord::Migration[5.2]

  def up
    change_column :items, :area, :string
  end

  def down
    change_column :items, :area, :integer
  end
end
