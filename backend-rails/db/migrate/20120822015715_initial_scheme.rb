class InitialScheme < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.references :user, :null => false
      t.string    :name, :default => ""
      t.string    :location, :default => "NY"
      t.text      :biography
      t.boolean   :welcome, :default => true
      t.timestamps
    end
  end
end
