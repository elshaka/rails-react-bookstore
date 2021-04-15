Rails.application.routes.draw do
  resources :books, constraints: lambda { |req| req.format == :json }

  get '*path', to: 'application#frontend'
end
