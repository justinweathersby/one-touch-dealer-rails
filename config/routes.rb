Rails.application.routes.draw do
  root 'static_pages#index'

  devise_for :users, path_names:  { sign_in: "login", sign_out: "logout" }

  match '/contact_form',      to: 'static_pages#contact_form',:via => [ :post ]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
