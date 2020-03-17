class Address < ApplicationRecord
  belongs_to :user, optional: true
  validates :prefecture, :city ,:number, :postal_code, presence: true
end


