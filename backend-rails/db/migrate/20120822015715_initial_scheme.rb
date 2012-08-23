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

    create_table :interactions do |t|
      t.string    :topic      
      t.text      :stem, :default => ''
      t.text      :stimulus, :default => ''     
      t.references :correct_answer_id

      t.timestamps
    end

    create_table :answers do |t|
      t.references  :interaction      
      t.text        :content

      t.timestamps
    end   
  end
end
