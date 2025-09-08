class User < ApplicationRecord
  SEED = [
    { email_address: "alex@railsdesigner.com", password: "password" },
    { email_address: "jordan@railsdesigner.com", password: "password" },
    { email_address: "casey@railsdesigner.com", password: "password" },
    { email_address: "morgan@railsdesigner.com", password: "password" },
    { email_address: "taylor@railsdesigner.com", password: "password" }
  ]

  has_secure_password
  has_many :sessions, dependent: :destroy
  
  normalizes :email_address, with: ->(e) { e.strip.downcase }
end
