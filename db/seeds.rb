# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# User.destroy_all
# u1 = User.create :name => 'Craigsy', :email => 'craigsy@gmail.com', :password => 'chicken', :password_confirmation => 'chicken', :role => 'admin'
# u2 = User.create :name => 'Jonesy', :email => 'jonesy@gmail.com', :password => 'chicken', :password_confirmation => 'chicken', :role => 'chef', :kitchen_id => '1'
# u3 = User.create :name => 'Linda', :email => 'linda@gmail.com', :password => 'chicken', :password_confirmation => 'chicken', :role => 'chef', :kitchen_id => '2'
# u4 = User.create :name => 'Angie', :email => 'angie@gmail.com', :password => 'chicken', :password_confirmation => 'chicken', :role => 'customer'

User.destroy_all
u1 = User.create :name => 'Craigsy', :email => 'craigsy@gmail.com', :password => 'chicken', :password_confirmation => 'chicken', :role => 'admin'
u2 = User.create :name => 'Jonesy', :email => 'jonesy@gmail.com', :password => 'chicken', :password_confirmation => 'chicken', :role => 'customer'
u3 = User.create :name => 'Linda', :email => 'linda@gmail.com', :password => 'chicken', :password_confirmation => 'chicken', :role => 'customer'
u4 = User.create :name => 'Angie', :email => 'angie@gmail.com', :password => 'chicken', :password_confirmation => 'chicken', :role => 'customer'


Product.destroy_all

p1 = Product.create :name => 'Samsung SSD 500GB', :description => 'Samsung 850 EVO Solid State Drive 500GB', :image => 'https://www.csw-it.com.au/content/productimages/sam001427_0_3758ae5a-10ec-4b84-a481-769a16c82eb8.jpg?width=150&height=150', :price => '450'
p2 = Product.create :name => 'Kingston HyperX Cloud', :description => 'Kingston HyperX Cloud Wired 53 mm Stereo Headset - Over-the-head - Circumaural - White -', :image => 'https://www.csw-it.com.au/content/productimages/kin000881_0_4fc8a75f-5e0b-402e-9355-d3154fd2de89.jpg?width=150&height=150', :price => '300'
p3 = Product.create :name => 'WD Elements 500 GB', :description => 'WD Elements portable storage with USB 3.0 delivers maximum data transfer rates, universal connectivity and up to 2 TB capacity for value-conscious consumers who are looking for reliable, high-capacity storage to go. Protect your files with the free 30-day trial of WD SmartWare™ Pro and back up your files to your WD Elements drive or to your Dropbox™ account. - See more at: https://www.csw-it.com.au/wd-elements-portable-2-5-500gb-external-usb3-0-hard-drive-black-3yr-sku-wdd000094#sthash.nMHkQJXX.dpuf', :image => 'https://www.csw-it.com.au/content/productimages/wdd000094_0_a4e98709-637e-4765-90a1-3a1aecaec36d.jpg?width=150&height=150', :price => '200'
p4 = Product.create :name => 'Logitech C525 Webcam', :description => 'Logitech C525 Webcam - Black - USB 2.0', :image => 'https://www.csw-it.com.au/content/productimages/log0017_0_63385d42-ae2e-4115-85e1-13b3cd9642c7.jpg?width=150&height=150', :price => '200'
p5 = Product.create :name => 'Logitech M705', :description => 'Logitech M705 Wireless Marathon Mouse', :image => 'https://www.csw-it.com.au/content/productimages/log000564_0_a49b8aaa-6bda-4059-b6d7-fee253193761.jpg?width=150&height=150', :price => '125'
p6 = Product.create :name => 'Wacom Intuos Pro Graphics Tablet', :description => 'Wacom Intuos Pro Graphics Tablet + new bundled software - 224 mm x 140 mm', :image => 'https://www.csw-it.com.au/content/productimages/wac000065_0_004d1085-5fff-4359-a87d-52bea711fb90.jpg?width=150&height=150', :price => '465'
p7 = Product.create :name => 'Samsung Xpress C1860FW Laser Multifunction Printer', :description => 'Samsung Xpress C1860FW Laser Multifunction Printer - Colour - Plain Paper Print - Desktop', :image => 'https://www.csw-it.com.au/content/productimages/sam000465_0_05be9695-bf73-4f22-bc4e-62168876a2ad.jpg?width=150&height=150', :price => '399'
p8 = Product.create :name => 'BenQ MX661 3D Ready DLP Projector', :description => 'BenQ MX661 3D Ready DLP Projector - 720p - HDTV - 4:3', :image => 'https://www.csw-it.com.au/content/productimages/ben000020_0_4b0764b4-d5a9-4266-a448-bbf45850c229.jpg?width=150&height=150', :price => '299'
p9 = Product.create :name => 'Lenovo System Mini-tower Server ', :description => 'Lenovo System x x3100 M5 5457B3M 4U Mini-tower Server - 1 x Intel Xeon E3-1220 v3 Quad-core (4 Core) 3.10 GHz', :image => 'https://www.csw-it.com.au/content/productimages/len003399_0_0379f9bf-e996-4095-914a-5c5fe4b0dd25.jpg?width=150&height=150', :price => '1250'