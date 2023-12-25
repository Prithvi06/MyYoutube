var nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];

export function generateRandomName() {
    return nameList[Math.floor( Math.random() * nameList.length )];
};

export function timeSince(date) {
    var seconds = Math.floor((new Date() - new Date(date)) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

export const formatCash = n => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };

export const CommentsData = [
    {
        name: "Prithvi Raj",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  voluptatibus fugit qui nostrum quibusdam ",
        replies: []
    },
    {
        name: "Prithvi Raj",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  voluptatibus fugit qui nostrum quibusdam ",
        replies: []
    },
    {
        name: "Prithvi Raj",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  voluptatibus fugit qui nostrum quibusdam ",
        replies: [
            {
                name: "Prithvi Raj",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  voluptatibus fugit qui nostrum quibusdam ",
                replies: [
                    {
                        name: "Prithvi Raj",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  voluptatibus fugit qui nostrum quibusdam ",
                        replies: [
                            {
                                name: "Prithvi Raj",
                                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  voluptatibus fugit qui nostrum quibusdam ",
                                replies: [
                                    {
                                        name: "Prithvi Raj",
                                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  voluptatibus fugit qui nostrum quibusdam ",
                                        replies: []
                                    },
                                    {
                                        name: "Prithvi Raj",
                                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  voluptatibus fugit qui nostrum quibusdam ",
                                        replies: []
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name: "Prithvi Raj",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  voluptatibus fugit qui nostrum quibusdam ",
                replies: []
            },
        ]
    },
    {
        name: "Prithvi Raj",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  voluptatibus fugit qui nostrum quibusdam ",
        replies: [
            {
                name: "Prithvi Raj",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  voluptatibus fugit qui nostrum quibusdam ",
                replies: []
            },
        ]
    },
    {
        name: "Prithvi Raj",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  voluptatibus fugit qui nostrum quibusdam ",
        replies: [
            {
                name: "Prithvi Raj",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  voluptatibus fugit qui nostrum quibusdam ",
                replies: []
            },
            {
                name: "Prithvi Raj",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.  voluptatibus fugit qui nostrum quibusdam ",
                replies: []
            },
        ]
    },
]