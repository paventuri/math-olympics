class InitialScheme < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.references  :interaction, :null => false           
      t.boolean     :is_correct, :default => false      
      t.text        :content, :default => ""

      t.timestamps
    end   

    create_table :interactions do |t|
      t.references   :level
      t.string    :topic      
      t.text      :stem, :default => ''
      t.text      :stimulus, :default => ''          
      t.integer   :points, :default => 1

      t.timestamps
    end

    create_table :levels do |t|
      t.integer :required_points, :default => 0
      t.string  :title

      t.timestamps  
    end

    create_table :profiles do |t|
      t.references :user, :null => false
      t.string    :name, :default => ""
      t.string    :location, :default => "NY"
      t.text      :biography
      t.integer   :total_points, :default => 0
      t.integer   :level, :default => 1
      t.boolean   :welcome, :default => true

      t.timestamps
    end
  end
end
