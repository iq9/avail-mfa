class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.text :email
      t.text :name
      t.text :password_digest
      t.datetime :last_login_at

      t.timestamps
    end
  end
end
