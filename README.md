# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
|first_name|string|null: false|
|last_name|string|null: false|
|furigana_first|string|null: false|
|furigana_last|string|null: false|
|birthdate|date|null: false|
|tell|integer|

### Association
- has_many :items
- has_one :address



## addressesテーブル
|Column|Type|Options|
|------|----|-------|
|prefecture|integer|null: false|
|postal_code|integer|null: false|
|city|string|null: false|
|number|string|null: false|
|building|string|
|user_id|bigint|foreign_key: true|

### Association
- belongs_to :user



## itemsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|description|text|null: false|
|price|integer|null: false|
|condition|integer|null: false|
|fee|integer|null: false|
|area|string|null: false|
|shipping_days|integer|null: false|
|purchase_id|integer|foreign_key: true|
|brand_id|bigint|foreign_key: true|
|user_id|bigint|foreign_key: true|
|category_id|bigint|foreign_key: true|

### Association
- belongs_to :brand, optional: true
- belongs_to :user, optional: true
- has_many :images, dependent: :destroy
- belongs_to :category, optional: true



### brandsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|

### Association
- has_many :items



## categoriesテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|ancestry|string|

### Association
- has_many :items
- has_ancestry



## imagesテーブル
|Column|Type|Options|
|------|----|-------|
|content|string|null: false|
|item_id|bigint|foreign_key: true|

### Association
- belongs_to :item, optional: true



## cardsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|customer_id|string|null: false|
|card_id|string|null: false|

### Association
