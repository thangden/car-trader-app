-- FAQ
CREATE TABLE FAQ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  question TEXT,
  answer TEXT,
  createdDate DATE
);

INSERT INTO FAQ
  (question, answer, createdDate)
values('How to be safe buying online?', 'Nam pellentesque porttitor nisi, vitae faucibus arcu malesuada vel. Maecenas felis felis, fermentum id dignissim ut, tempor non lacus. Fusce porttitor consequat leo et viverra. Vestibulum semper tellus diam, non sagittis libero dignissim tincidunt. Mauris viverra blandit porta. Proin tincidunt facilisis nibh quis semper. Nulla id sollicitudin felis. Duis varius metus nibh, ut imperdiet nulla fringilla eu.

In rhoncus ullamcorper ex ac auctor. Proin pharetra, magna nec finibus cursus, arcu ipsum interdum nisl, ut ultricies massa mauris id orci. Aliquam vehicula, ligula non eleifend consectetur, ex felis sollicitudin neque, et bibendum odio nisi sit amet risus. Donec libero augue, lobortis ut bibendum vel, sodales in est. Vestibulum eu hendrerit nulla. Aliquam lacinia tempor nisl, id varius arcu tincidunt a. Etiam tincidunt sapien eget egestas porta. Cras erat lectus, pellentesque a ipsum in, luctus blandit ipsum. Sed commodo tempor vestibulum. Aliquam eu ipsum accumsan, fermentum nunc pellentesque, hendrerit lorem. Fusce dapibus tortor ultrices, sollicitudin neque ac, dapibus nisi. Nullam in leo ex. Phasellus molestie nibh et scelerisque porttitor. Donec id risus suscipit, interdum nisl sed, volutpat felis.', DATE('2019-11-01'));
INSERT INTO FAQ
  (question, answer, createdDate)
values('Do I have any assurance on my new car?', 'Phasellus ac arcu sollicitudin, posuere sapien eu, condimentum nunc.
Morbi ullamcorper ante sed ex mollis consectetur.
Nam sit amet tellus volutpat velit faucibus dignissim.
Aenean eu diam ut diam placerat sagittis.
Curabitur porttitor est sit amet orci auctor mollis.', DATE('2020-11-01'));
INSERT INTO FAQ
  (question, answer, createdDate)
values('How many kilometers a normal car can have?', 'Donec dictum libero ac ante venenatis egestas. Praesent scelerisque fermentum pulvinar. Fusce sapien massa, tincidunt et leo id, pretium lobortis orci. Suspendisse et ligula nulla. Vestibulum dictum pellentesque ex, tincidunt mattis tellus iaculis at. Donec in ante lorem. Duis aliquet erat a justo posuere, vitae pretium urna tincidunt. Nunc at magna vel velit blandit viverra eget faucibus libero. Phasellus in blandit felis. Aenean molestie nulla magna, at sodales arcu eleifend vel. Aenean pretium metus ultricies vulputate cursus. Pellentesque vehicula sodales est, non luctus leo pulvinar vel. In hac habitasse platea dictumst. Aliquam ac lacus ut turpis tempus feugiat pellentesque nec risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', DATE('2018-11-01'));
INSERT INTO FAQ
  (question, answer, createdDate)
values('What is the best month to buy a car?', 'Suspendisse id massa quis leo placerat aliquet quis a diam.
Mauris eu odio non nibh blandit egestas.
Curabitur accumsan tortor quis ultrices efficitur.
Suspendisse ac lorem sit amet nunc viverra bibendum.
Nunc at tortor facilisis, fringilla enim a, aliquet erat.
Nam vel libero sit amet neque sagittis ultrices.
Praesent ut nisl a ligula rutrum pulvinar.
Integer sed leo sit amet mi semper iaculis quis at purus.
Nulla efficitur libero id nibh rutrum sodales.
Sed egestas diam a libero aliquam, et consequat enim molestie.
Quisque mattis augue non massa posuere varius.
Duis vitae nulla dapibus, dignissim mauris eget, facilisis tellus.
Proin finibus tortor sit amet nisi suscipit lobortis.
Vivamus suscipit eros eget mauris semper efficitur.
Ut at metus cursus, congue ligula vel, mattis nunc.
Suspendisse consectetur nisl vitae velit condimentum dictum.
Nam a est lacinia, ullamcorper nibh quis, bibendum dolor.
Nunc ac massa semper, feugiat felis non, suscipit sapien.', DATE('2018-11-01'));
INSERT INTO FAQ
  (question, answer, createdDate)
values('How to know the car history?', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', DATE('2018-11-01'));
INSERT INTO FAQ
  (question, answer, createdDate)
values('How much do I pay a month to use the service?', 'Sed bibendum massa nec mauris tristique posuere. Cras ante dolor, ultricies quis pellentesque non, mattis sed mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum at sodales arcu. Nam molestie blandit eros, id finibus turpis maximus eget. In congue, lectus sit amet elementum suscipit, dui diam rhoncus purus, quis fermentum arcu dui in sapien. Vestibulum vehicula faucibus ex in lacinia. Vivamus dolor felis, imperdiet vel lobortis et, blandit fringilla nunc. Duis dictum commodo magna sit amet consequat. Suspendisse quis fermentum lorem.

Vestibulum ac aliquet nisl. Nulla facilisi. Integer sed purus ex. Phasellus maximus purus ac semper lacinia. In hac habitasse platea dictumst. Etiam imperdiet nulla nec lorem elementum ultricies. Nam fermentum sem ac nulla molestie tempus. Sed condimentum luctus felis at maximus. Ut non mi finibus, posuere risus id, laoreet turpis. Aliquam tempus urna nibh, et facilisis orci rutrum at. Phasellus vel ultrices risus, id dignissim felis. Duis nec posuere dui. Aliquam aliquet nisi sit amet nisl tincidunt fermentum. Donec ultrices ultricies neque, ut aliquam risus porttitor vel.

Maecenas venenatis lacus sem, eu hendrerit libero dictum id. Nam nulla nibh, elementum vel efficitur nec, vulputate sed nisl. Aliquam quis sodales lorem. Donec dictum a ante eget ultricies. Donec felis libero, semper imperdiet erat id, vulputate vehicula quam. Cras pulvinar non est lacinia lobortis. Vestibulum non tellus egestas, semper neque a, feugiat purus. Aliquam molestie, lorem ut vehicula tempus, arcu mauris sagittis lectus, non vulputate odio odio a libero.', DATE('2018-11-01'));

-- Car
CREATE TABLE Car (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  make TEXT,
  model TEXT,
  year INTEGER,
  fuelType TEXT,
  kilometers INTEGER,
  details TEXT,
  price INTEGER,
  photoUrl TEXT
);

INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('Audi', 'A2', 2003 , 123456, 'Petrol' , 8199, '/photos/cars/audi-a2-2003-8199.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('BMW', '116', 2013 , 1231231, 'Petrol' , 12999, '/photos/cars/bmw-116-d-line-urban-2013.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('BMW', '320', 2009 , 655656, 'Petrol' , 18999, '/photos/cars/bmw-320-2009-18000.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('BMW', 'x1', 2012 , 565656, 'Diesel' , 24000, '/photos/cars/bmw-x1-2012-24999.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('Ford', 'Fiesta', 2008 , 433444, 'Petrol' , 5590, '/photos/cars/ford-fiesta-2008-5950.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('Ford', 'Fiesta', 2014 , 343434, 'Petrol' , 9950, '/photos/cars/ford-fiesta-2014-9950.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('Mazda', '6', 2015 , 343411, 'Petrol' , 21000, '/photos/cars/mazda-6-2015.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('Merces-Benz', '200', 2015 , 111111, 'Petrol' , 24999, '/photos/cars/mercedes-benz-200-2015-24999.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('Merces-Benz', 'e250', 2011 , 123443, 'Diesel' , 29800, '/photos/cars/mercedes-benz-e250-2011-29800.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('Peugeot', '3008', 2014 , 77000, 'Petrol' , 18999, '/photos/cars/peugeot-3008-2014-17999.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('Renault', 'Clio', 2017 , 123133, 'Diesel' , 13485, '/photos/cars/renault-clio-2017-13485.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('Renault', 'Espace', 2004 , 123123, 'Petrol' , 9800, '/photos/cars/renault-espace-2004.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('Renault', 'Megane IV', 2016 , 123123, 'Diesel' , 15890, '/photos/cars/renault-megane-2016-15890.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('Seat', 'Leon', 2010 , 44444, 'Diesel' , 13650, '/photos/cars/seat-leon-2010-13650.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('Smart', 'for two', 2008 , 5534, 'Diesel' , 5800, '/photos/cars/smart-fortwo-2008-5800.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('Smart', 'for two', 2012 , 43434, 'Diesel' , 7950, '/photos/cars/smart-fortwo-2012-7950.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('Smart', 'for two', 2003 , 343434, 'Diesel' , 8850, '/photos/cars/smart-fortwo-passion-2003-8888.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('Smart', 'for two', 2015 , 343434, 'Diesel' , 11500, '/photos/cars/smart-fortwo-passion-2015-11500.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('Volkswagen', 'EOS', 2008 , 343434, 'Diesel' , 14700, '/photos/cars/volkswagen-eos-2008-14700.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('Volkswagen', 'Golf', 2013 , 123123, 'Diesel' , 18300, '/photos/cars/volkswagen-golf-2013-18300.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO Car
  (make, model, year, kilometers, fuelType, price, photoUrl, details)
values('Volkswagen', 'Tiguan', 2007 , 1231234, 'Petrol' , 14299, '/photos/cars/volkswagen-tiguan-2007-14299.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

-- Down
DROP TABLE FAQ;
DROP TABLE Car;