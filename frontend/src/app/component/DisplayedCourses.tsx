import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import featuredClass1 from '../../image/hero2.png';
import featuredClass2 from '../../image/allcourses-bg.jpg';

const DisplayedCourses = () => {
  // Dummy data for courses based on categories
  const courses = [
    {   "id":0,
        "title": "Cyberpunk 2077",
        "description": "An open-world, action-adventure story set in Night City.",
        "price": 59.99,
        "release_date": "2020-12-10",
        "image": "https://store.steampowered.com/app/1091500/Cyberpunk_2077/"
    },
    {   "id":1,
        "title": "The Witcher 3: Wild Hunt",
        "description": "An open-world RPG that sets a new standard for storytelling, player choice, and game world.",
        "price": 39.99,
        "release_date": "2015-05-18",
        "image": "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/"
    },
    {   "id":2,
        "title": "DOOM Eternal",
        "description": "Rip and tear your way through a power fantasy first-person shooter.",
        "price": 49.99,
        "release_date": "2020-03-20",
        "image": "https://store.steampowered.com/app/782330/DOOM_Eternal/"
    },
    {   "id":3,
        "title": "Hades",
        "description": "A rogue-like dungeon crawler where you defy the god of the dead.",
        "price": 24.99,
        "release_date": "2020-09-17",
        "image": "https://store.steampowered.com/app/1145360/Hades/"
    },
    {   "id":4,
        "title": "Red Dead Redemption 2",
        "description": "An epic tale of life in America at the dawn of the modern age.",
        "price": 59.99,
        "release_date": "2019-12-05",
        "image": "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"
    },
    {   "id":5,
        "title": "Dark Souls III",
        "description": "A third-person action RPG that continues the Souls series' punishing difficulty and intense combat.",
        "price": 59.99,
        "release_date": "2016-04-11",
        "image": "https://store.steampowered.com/app/374320/DARK_SOULS_III/"
    },
    {   "id":6,
        "title": "Sekiro: Shadows Die Twice",
        "description": "An action-adventure game with a focus on precise combat and stealth.",
        "price": 59.99,
        "release_date": "2019-03-21",
        "image": "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice/"
    },
    {   "id":7,
        "title": "Resident Evil Village",
        "description": "Survival horror at its finest, continuing the story of Ethan Winters.",
        "price": 59.99,
        "release_date": "2021-05-06",
        "image": "https://store.steampowered.com/app/1196590/Resident_Evil_Village/"
    },
    {   "id":8,
        "title": "Stardew Valley",
        "description": "A farming simulation game where you can grow crops, raise animals, and build the farm of your dreams.",
        "price": 14.99,
        "release_date": "2016-02-26",
        "image": "https://store.steampowered.com/app/413150/Stardew_Valley/"
    },
    {   "id":9,
        "title": "Hollow Knight",
        "description": "A challenging and beautifully hand-drawn Metroidvania game.",
        "price": 14.99,
        "release_date": "2017-02-24",
        "image": "https://store.steampowered.com/app/367520/Hollow_Knight/"
    },
    {   "id":10,
        "title": "Among Us",
        "description": "A multiplayer social deduction game where players work together to complete tasks, but beware of the impostor.",
        "price": 4.99,
        "release_date": "2018-11-16",
        "image": "https://store.steampowered.com/app/945360/Among_Us/"
    },
    {   "id":11,
        "title": "No Man's Sky",
        "description": "An open-world exploration game set in a procedurally generated universe.",
        "price": 59.99,
        "release_date": "2016-08-12",
        "image": "https://store.steampowered.com/app/275850/No_Mans_Sky/"
    },
    {   "id":12,
        "title": "Celeste",
        "description": "A platformer about climbing a mountain and overcoming personal challenges.",
        "price": 19.99,
        "release_date": "2018-01-25",
        "image": "https://store.steampowered.com/app/504230/Celeste/"
    },
    {   "id":13,
        "title": "Factorio",
        "description": "A game about building and managing factories to produce increasingly complex products.",
        "price": 30.00,
        "release_date": "2020-08-14",
        "image": "https://store.steampowered.com/app/427520/Factorio/"
    },
    {   "id":14,
        "title": "Terraria",
        "description": "A 2D sandbox game where players can explore, build, and battle in a procedurally generated world.",
        "price": 9.99,
        "release_date": "2011-05-16",
        "image": "https://store.steampowered.com/app/105600/Terraria/"
    },
    {   "id":15,
        "title": "The Binding of Isaac: Rebirth",
        "description": "A rogue-like dungeon crawler with randomly generated levels and items.",
        "price": 14.99,
        "release_date": "2014-11-04",
        "image": "https://store.steampowered.com/app/250900/The_Binding_of_Isaac_Rebirth/"
    },
    {   "id":16,
        "title": "Dead Cells",
        "description": "A rogue-like, Metroidvania-inspired action-platformer.",
        "price": 24.99,
        "release_date": "2018-08-06",
        "image": "https://store.steampowered.com/app/588650/Dead_Cells/"
    },
    {   "id":17,
        "title": "Divinity: Original Sin 2",
        "description": "A critically acclaimed RPG with deep tactical combat and an engaging story.",
        "price": 44.99,
        "release_date": "2017-09-14",
        "image": "https://store.steampowered.com/app/435150/Divinity_Original_Sin_2__Definitive_Edition/"
    },
    {   "id":18,
        "title": "Cuphead",
        "description": "A run and gun game known for its challenging gameplay and hand-drawn 1930s-style animations.",
        "price": 19.99,
        "release_date": "2017-09-29",
        "image": "https://store.steampowered.com/app/268910/Cuphead/"
    },
    {   "id":19,
        "title": "Ghost of Tsushima",
        "description": "An open-world action-adventure game set in feudal Japan.",
        "price": 59.99,
        "release_date": "2020-07-17",
        "image": "https://store.steampowered.com/app/1231230/Ghost_of_Tsushima/"
    },
    {   "id":20,
        "title": "Metro Exodus",
        "description": "A story-driven first-person shooter set in a post-apocalyptic Russia.",
        "price": 39.99,
        "release_date": "2019-02-14",
        "image": "https://store.steampowered.com/app/412020/Metro_Exodus/"
    }
]
;

  return (
    <div className="bg-gray-50 py-12">
      {/* Courses Display */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image src={course.image} alt={course.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <div className="flex items-center text-gray-500 mb-2">
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    <span>{course.price}</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300 flex items-center justify-center">
                    Explore Course
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayedCourses;
