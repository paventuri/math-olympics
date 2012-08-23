# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   Mayor.create(name: 'Emanuel', city: cities.first)
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
puts 'SETTING UP ADMIN USER LOGIN'
admin = User.create!(:email => 'administrator@kaplan.com', :password => 'administrator', :password_confirmation => 'administrator')
admin.add_role :admin
puts 'New admin user created: ' << admin.email

puts 'SETTING UP GUEST USER LOGIN'
guest = User.create!(:email => 'guest@kaplan.com', :password => 'annonymous', :password_confirmation => 'annonymous')
guest.profile.name = "Annonymous"
guest.profile.total_points = 100
guest.save!
puts 'New guest user created: ' << guest.email


puts 'SETTING UP LEVELS'
Level.create!(:title => '1st Pythogras')
Level.create!(:title => '2nd Euler')
Level.create!(:title => '3rd Gauss')
Level.create!(:title => '4rd Rieamann')
Level.create!(:title => '5rd Fermat')
Level.create!(:title => '6rd Archimedes')
Level.create!(:title => '7rd Newton')


puts 'SETTING INTERACTIONS'
steam1 = <<eos
<p>
  Find the area of the triangle with sides 
  <KTPMath>
    <m:math xmlns:m="http://www.w3.org/1998/Math/MathML" overflow="scroll">
        <m:mrow>
            <m:mrow>
                <m:mi>a</m:mi>
            </m:mrow>
            <m:mo>=</m:mo>
            <m:mrow>
                <m:mi>8</m:mi>
            </m:mrow>
        </m:mrow>
    </m:math>
  </KTPMath> , 
  <KTPMath>
    <m:math xmlns:m="http://www.w3.org/1998/Math/MathML" overflow="scroll">
        <m:mrow>
            <m:mrow>
                <m:mi>b</m:mi>
            </m:mrow>
            <m:mo>=</m:mo>
            <m:mrow>
                <m:mi>14</m:mi>
            </m:mrow>
        </m:mrow>
    </m:math>
  </KTPMath>, 
  <KTPMath>
    <m:math xmlns:m="http://www.w3.org/1998/Math/MathML" overflow="scroll">
        <m:mrow>
            <m:mrow>
                <m:mi>c</m:mi>
            </m:mrow>
            <m:mo>=</m:mo>
            <m:mrow>
                <m:mi>23</m:mi>
            </m:mrow>
        </m:mrow>
    </m:math>
  </KTPMath>
</p>
eos

interaction1 = Interaction.create!(:level => Level.first, 
                              :topic => 'quesmap', 
                              :stem => steam1,                               
                              :points => 20)
Answer.create!(:interaction => interaction1, :content => '48.2', :is_correct => true)
Answer.create!(:interaction => interaction1, :content => '51.4')
Answer.create!(:interaction => interaction1, :content => '56')
Answer.create!(:interaction => interaction1, :content => '120.3')
Answer.create!(:interaction => interaction1, :content => 'No solution')



steam2 = <<eos
<p>
  One side of a triangle has length 6 and second side has length 7. Which of the 
  following could be the area of this triangle?
</p>
<ol>
  <li>13</li>
  <li>21</li>
  <li>24</li>
</ol>
eos

interaction2 = Interaction.create!(:level => Level.first, 
                              :topic => 'topic_4ds_4sg_3h', 
                              :stem => steam2,                               
                              :points => 10)

Answer.create!(:interaction => interaction2, :content => '1 only')
Answer.create!(:interaction => interaction2, :content => '2 only', :is_correct => true)
Answer.create!(:interaction => interaction2, :content => '1 and 2 only')
Answer.create!(:interaction => interaction2, :content => '1, 2, 3')


steam3 = <<eos
<p>If the sum of 5 different positive integers is 100, what is the greatest possible value for the median of the 5 integers?</p>
  <ol>
    <li>13</li>
    <li>21</li>
    <li>24</li>
  </ol>
eos

interaction3 = Interaction.create!(:level => Level.first, 
                              :topic => 'topic_zxf_phh_3z', 
                              :stem => steam3,                               
                              :points => 50)

Answer.create!(:interaction => interaction3, :content => '31')
Answer.create!(:interaction => interaction3, :content => '32', :is_correct => true)
Answer.create!(:interaction => interaction3, :content => '33')
Answer.create!(:interaction => interaction3, :content => '34')
Answer.create!(:interaction => interaction3, :content => '50')




