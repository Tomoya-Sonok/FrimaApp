Rails.application.routes.draw do


  devise_for :users, controllers: {
    registrations: 'users/registrations',
  }
  devise_scope :user do
    get 'addresses', to: 'users/registrations#new_address'
    post 'addresses', to: 'users/registrations#create_address'
  end
  root 'items#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :card, only: [:new, :show] do
    collection do
      post 'show', to: 'card#show'
      post 'pay', to: 'card#pay'
      post 'delete', to: 'card#delete'
    end
  end

  resources :items, only:[:show, :new, :create, :edit, :destroy] do
    member do
      get 'confirm', to: 'items#confirm'
      post 'pay', to: 'items#pay'
      get 'done', to: 'items#done'
    end
    collection do
      get 'get_category_children', defaults: { format: 'json' }
      get 'get_category_grandchildren', defaults: { format: 'json' }
    end
  end

  resources :items do
    resources :comments, only: :create
  end

  resources :users, only: [:index, :show]


end
