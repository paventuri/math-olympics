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
Level.create!(:title => 'Level 1')
Level.create!(:title => 'Level 2')
Level.create!(:title => 'Level 3')
Level.create!(:title => 'Level 4')
Level.create!(:title => 'Level 5')
Level.create!(:title => 'Level 6')
Level.create!(:title => 'Level 7')


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

interaction1 = Interaction.create!(:level => Level.find(1), 
                              :topic => 'quesmap', 
                              :stem => steam1,                               
                              :points => 20)
Answer.create!(:interaction => interaction1, :content => '48.2', :is_correct => true)
Answer.create!(:interaction => interaction1, :content => '51.4')
Answer.create!(:interaction => interaction1, :content => '56')
Answer.create!(:interaction => interaction1, :content => '120.3')
Answer.create!(:interaction => interaction1, :content => 'No solution')


steam2 = <<eos
<p>If the sum of 5 different positive integers is 100, what is the greatest possible value for the median of the 5 integers? 13, 21, 24</p>
  
eos

interaction2 = Interaction.create!(:level => Level.find(1), 
                              :topic => 'topic_zxf_phh_3z', 
                              :stem => steam2,                               
                              :points => 50)

Answer.create!(:interaction => interaction2, :content => '31')
Answer.create!(:interaction => interaction2, :content => '32', :is_correct => true)
Answer.create!(:interaction => interaction2, :content => '33')
Answer.create!(:interaction => interaction2, :content => '34')
Answer.create!(:interaction => interaction2, :content => '50')

steam3 = <<eos
<p>Find the smallest positive angle that is coterminal with -11.44</p>
eos

interaction3 = Interaction.create!(:level => Level.find(1), 
                              :topic => 'topic_ryf_c3h_3h', 
                              :stem => steam3,                               
                              :points => 50)

Answer.create!(:interaction => interaction3, :content => '-2.90')
Answer.create!(:interaction => interaction3, :content => '1.13', :is_correct => true)
Answer.create!(:interaction => interaction3, :content => '4.27')
Answer.create!(:interaction => interaction3, :content => '7.41')
Answer.create!(:interaction => interaction3, :content => '348.56')

steam4 = <<eos
<p>The number 34,459,425 is the product of several consecutive odd numbers. What is the greatest of these numbers?</p>
eos

interaction4 = Interaction.create!(:level => Level.find(1),
								:topic => 'topic_cjm_mrh_3k',
								:stem => steam4,
								:points => 50)
								
Answer.create!(:interaction => interaction4, :content => '17')
Answer.create!(:interaction => interaction4, :content => '33', :is_correct => true)
Answer.create!(:interaction => interaction4, :content => '51')
Answer.create!(:interaction => interaction4, :content => '63')
Answer.create!(:interaction => interaction4, :content => '97')

steam5 = <<eos
<p>If <m:math xmlns:m="http://www.w3.org/1998/Math/MathML" overflow="scroll">
                            <m:mrow>
                                <m:mrow>
                                    <m:mi>s</m:mi>
                                    <m:mo>?</m:mo>
                                    <m:msup>
                                        <m:mrow>
                                            <m:mi>t</m:mi>
                                        </m:mrow>
                                        <m:mrow>
                                            <m:mn>4</m:mn>
                                        </m:mrow>
                                    </m:msup>
                                </m:mrow>
                                <m:mrow>
                                    <m:msup>
                                        <m:mrow>
                                            <m:mi>u</m:mi>
                                        </m:mrow>
                                        <m:mrow>
                                            <m:mn>4</m:mn>
                                        </m:mrow>
                                    </m:msup>
                                </m:mrow>
                                <m:mo>></m:mo>
                                <m:mi>0</m:mi>
                            </m:mrow>
                        </m:math>, which of the following products must be positive?</p>
eos

interaction5 = Interaction.create!(:level => Level.find(1), 
                              :topic => 'topic_drz_4dh_3h', 
                              :stem => steam5,                               
                              :points => 50)

Answer.create!(:interaction => interaction5, :content => 'st')
Answer.create!(:interaction => interaction5, :content => 'su', :is_correct => true)
Answer.create!(:interaction => interaction5, :content => 'tu')
Answer.create!(:interaction => interaction5, :content => 'stu')
Answer.create!(:interaction => interaction5, :content => 'no answer')

steam6 = <<eos
<p>Write the equation of the graph produced by translating the graph of  <m:math xmlns:m="http://www.w3.org/1998/Math/MathML" overflow="scroll">
                            <m:math xmlns:m="http://www.w3.org/1998/Math/MathML" overflow="scroll">
                            <m:mrow>
                                <m:mrow>
                                    <m:mi>y</m:mi>
                                    <m:mo>=</m:mo>
                                    <m:msup>
                                        <m:mrow>
                                            <m:mn>|</m:mn>
                                        </m:mrow>
                                    </m:msup>
                                </m:mrow>
                                <m:mrow>
                                    <m:msup>
                                        <m:mrow>
                                            <m:mn>x</m:mn>
                                            <m:mi>+</m:mi>
                                            <m:mn>1</m:mn>
                                            <m:mn>|</m:mn>
                                        </m:mrow>
                                    </m:msup>
                                </m:mrow>
                            </m:mrow>
                        </m:math>, four units to the right, then 5 units downward, then reflecting it
                    across the <m:math xmlns:m="http://www.w3.org/1998/Math/MathML" overflow="scroll">
                            <m:mrow>
                                <m:mrow>
                                    <m:msup>
                                        <m:mrow>
                                            <m:mi>x</m:mi>
                                        </m:mrow>
                                    </m:msup>
                                </m:mrow>
                            </m:mrow>
                        </m:math>-axis</p>
eos

interaction6 = Interaction.create!(:level => Level.find(2),  
                              :topic => 'topic_drz_4dh_3h', 
                              :stem => steam6,                               
                              :points => 50)

Answer.create!(:interaction => interaction6, :content => 'y=|x+1|+5')
Answer.create!(:interaction => interaction6, :content => 'y=|x-4|+4', :is_correct => true)
Answer.create!(:interaction => interaction6, :content => 'y=|x-5|+5')
Answer.create!(:interaction => interaction6, :content => 'y=|x+5|+5')
Answer.create!(:interaction => interaction6, :content => 'y=|x-3|-5')

steam7 = <<eos
<p>The number of microbes in a Petri dish doubles every second. One dish has 1,000,000,000 microbes after 9 seconds. A second dish begins with four times as many microbes as the first dish. How many second pass before the second dish has 1,000,000,000 microbes?</p>
eos

interaction7 = Interaction.create!(:level => Level.find(2),  
                              :topic => 'topic_5ts_4qh_3f', 
                              :stem => steam7,                               
                              :points => 50)

Answer.create!(:interaction => interaction7, :content => '2.25')
Answer.create!(:interaction => interaction7, :content => '2.5', :is_correct => true)
Answer.create!(:interaction => interaction7, :content => '3')
Answer.create!(:interaction => interaction7, :content => '4.5')
Answer.create!(:interaction => interaction7, :content => '7')

steam8 = <<eos
<p>A best-of-five series ends when one team wins three games. The probability of team A defeating Team B in any game is <m:math xmlns:m="http://www.w3.org/1998/Math/MathML" overflow="scroll">
                            <m:mrow>
                                <m:mfrac>
                                    <m:mrow>
                                        <m:mi>4</m:mi>
                                    </m:mrow>
                                    <m:mrow>
                                        <m:mi>9</m:mi>
                                    </m:mrow>
                                </m:mfrac>
                            </m:mrow>
                        </m:math>.  What is the probability that team A will win the series?
eos

interaction8 = Interaction.create!(:level => Level.find(1),  
                              :topic => 'topic_5bn_trh_3l', 
                              :stem => steam8,                               
                              :points => 50)

Answer.create!(:interaction => interaction8, :content => '256/729')
Answer.create!(:interaction => interaction8, :content => '1024/2127', :is_correct => true)
Answer.create!(:interaction => interaction8, :content => '2624/6561')
Answer.create!(:interaction => interaction8, :content => '7808/19683')
Answer.create!(:interaction => interaction8, :content => '32704/59704')

steam9 = <<eos
<p>If <m:math xmlns:m="http://www.w3.org/1998/Math/MathML" overflow="scroll">
                            <m:mrow>
                                <m:mrow>
                                    <m:mi>y</m:mi>
                                </m:mrow>
                                <m:mrow>
                                    <m:mn>=</m:mn>
                                </m:mrow>
                                <m:mrow>
                                    <m:mn>3</m:mn>
                                    <m:mi>x</m:mi>
                                </m:mrow>
                                <m:mrow>
                                    <m:mi>-</m:mi>
                                    <m:mn>7</m:mn>
                                </m:mrow>
                            </m:mrow>
                        </m:math> and <m:math xmlns:m="http://www.w3.org/1998/Math/MathML" overflow="scroll">
                            <m:mrow>
                                <m:mrow>
                                    <m:mi>x</m:mi>
                                </m:mrow>
                                <m:mrow>
                                    <m:mi>></m:mi>
                                    <m:mn>0</m:mn>
                                </m:mrow>
                            </m:mrow>
                        </m:math> , what is the minimum of <m:math xmlns:m="http://www.w3.org/1998/Math/MathML" overflow="scroll">
                            <m:mrow>
                                <m:mrow>
                                    <m:msup>
                                        <m:mrow>
                                            <m:mi>x</m:mi>
                                        </m:mrow>
                                        <m:mrow>
                                            <m:mn>2</m:mn>
                                        </m:mrow>
                                    </m:msup>
                                    <m:mi>y</m:mi>
                                </m:mrow>
                            </m:mrow>
                        </m:math>? </p>
eos

interaction9 = Interaction.create!(:level => Level.find(1),  
                              :topic => 'topic_kgg_1th_3x', 
                              :stem => steam9,                               
                              :points => 50)

Answer.create!(:interaction => interaction9, :content => '-5.646')
Answer.create!(:interaction => interaction9, :content => '0', :is_correct => true)
Answer.create!(:interaction => interaction9, :content => '1.555')
Answer.create!(:interaction => interaction9, :content => '2.813')
Answer.create!(:interaction => interaction9, :content => '3.841')

steam10 = <<eos
<p>Determine <m:math xmlns:m="http://www.w3.org/1998/Math/MathML" overflow="scroll">
                            <m:mrow>
                                <m:mrow>
                                    <m:mfrac>
                                        <m:mi>dy</m:mi>
                                        <m:mi>dx</m:mi>
                                    </m:mfrac>
                                </m:mrow>
                            </m:mrow>
                        </m:math> for the curve defined by <m:math xmlns:m="http://www.w3.org/1998/Math/MathML" overflow="scroll">
                            <m:mrow>
                                <m:mrow>
                                    <m:msup>
                                        <m:mi>x</m:mi>
                                        <m:mi>3</m:mi>
                                    </m:msup>
                                </m:mrow>
                                <m:mrow>
                                    <m:mn>+</m:mn>
                                </m:mrow>
                                <m:mrow>
                                    <m:msup>
                                        <m:mi>y</m:mi>
                                        <m:mi>3</m:mi>
                                    </m:msup>
                                </m:mrow>
                                <m:mrow>
                                    <m:mn>=</m:mn>
                                </m:mrow>
                                <m:mrow>
                                    <m:mn>3</m:mn>
                                    <m:mi>x</m:mi>
                                    <m:mi>y</m:mi>
                                </m:mrow>
                            </m:mrow>
                        </m:math></p>
eos

interaction10 = Interaction.create!(:level => Level.find(1),  
                              :topic => 'topic_stj_lwh_3w', 
                              :stem => steam10,                               
                              :points => 50)

Answer.create!(:interaction => interaction10, :content => 'x/y')
Answer.create!(:interaction => interaction10, :content => '2X', :is_correct => true)
Answer.create!(:interaction => interaction10, :content => 'y+2')
Answer.create!(:interaction => interaction10, :content => '-x+37')
Answer.create!(:interaction => interaction10, :content => 'x')

steam11 = <<eos
<p>The expression below is called a Partial Fractions Expansion. Find the sum of a, b, and c</p>
eos

interaction11 = Interaction.create!(:level => Level.find(2),  
                              :topic => 'topic_2tg_knm_3h', 
                              :stem => steam11,                               
                              :points => 50)

Answer.create!(:interaction => interaction11, :content => '-7')
Answer.create!(:interaction => interaction11, :content => '1', :is_correct => true)
Answer.create!(:interaction => interaction11, :content => '3')
Answer.create!(:interaction => interaction11, :content => '6')
Answer.create!(:interaction => interaction11, :content => '9')

steam12 = <<eos
<p>The average age of a group of teachers and students is 20. The average age of the teachers is 35, and the average age of the students is 15. What is the ratio of teachers to students?</p>
eos

interaction12 = Interaction.create!(:level => Level.find(1),  
                              :topic => 'topic_sgt_dtm_3h', 
                              :stem => steam12,                               
                              :points => 50)
							  
Answer.create!(:interaction => interaction12, :content => '1/5')
Answer.create!(:interaction => interaction12, :content => '1/4', :is_correct => true)
Answer.create!(:interaction => interaction12, :content => '1/3')
Answer.create!(:interaction => interaction12, :content => '1/2')
Answer.create!(:interaction => interaction12, :content => '3/5')

steam13 = <<eos
<p>The points of interaction of the solution sets of the equations <m:math xmlns:m="http://www.w3.org/1998/Math/MathML" overflow="scroll">
                            <m:mrow>
                                <m:mrow>
                                    <m:mi>x</m:mi>
                                    <m:mn>+</m:mn>
                                    <m:mn>2</m:mn>
                                    <m:mi>y</m:mi>
                                    <m:mn>=</m:mn>
                                    <m:mn>4</m:mn>
                                </m:mrow>
                            </m:mrow>
                        </m:math> and <m:math xmlns:m="http://www.w3.org/1998/Math/MathML" overflow="scroll">
                            <m:mrow>
                                <m:mrow>
                                    <m:msup>
                                        <m:mi>y</m:mi>
                                        <m:mn>2</m:mn>
                                    </m:msup>
                                    <m:mn>=</m:mn>
                                    <m:mi>x</m:mi>
                                    <m:mn>+</m:mn>
                                    <m:mn>4</m:mn>
                                </m:mrow>
                            </m:mrow>
                        </m:math>
eos
interaction13 = Interaction.create!(:level => Level.find(2), 
                              :topic => 'topic_xbf_gvm_3h', 
                              :stem => steam13,                               
                              :points => 50)
							  
Answer.create!(:interaction => interaction13, :content => '(0, 2) and (-2, 8)')
Answer.create!(:interaction => interaction13, :content => '(0, 2) and (-2, 0)', :is_correct => true)
Answer.create!(:interaction => interaction13, :content => '(0, 2) and (12, -4)')
Answer.create!(:interaction => interaction13, :content => '(0, 2) and (0, -2)')
Answer.create!(:interaction => interaction13, :content => '(-2, 0) and (0, -2)')

steam14 = <<eos
<p>A storage tank can be filled in 40 minutes by using two inlets. If the larger inlet can fill the tank in 1 hour less than the smaller tank, how long will it take the smaller inlet to fill the tank? </p>
eos

interaction14 = Interaction.create!(:level => Level.find(1), 
                              :topic => 'topic_xbf_gvp_3h', 
                              :stem => steam14,                               
                              :points => 50)
							  
Answer.create!(:interaction => interaction14, :content => '1 hour')
Answer.create!(:interaction => interaction14, :content => '1 hour, 20 minutes', :is_correct => true)
Answer.create!(:interaction => interaction14, :content => '2 hours')
Answer.create!(:interaction => interaction14, :content => '2 hours, 40 minutes')
Answer.create!(:interaction => interaction14, :content => '3 hours')



