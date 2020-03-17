class AddPostalcodeToAddresses < ActiveRecord::Migration[5.2]
  def change
    add_column :addresses, :postal_code, :integer, null: false
  end
end

