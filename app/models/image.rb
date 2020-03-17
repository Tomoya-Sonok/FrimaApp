class Image < ApplicationRecord
  belongs_to :item, optional: true
  validates_presence_of :item
  validates :content, presence: true
  mount_uploader :content, ImageUploader
end
