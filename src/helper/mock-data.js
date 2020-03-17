export const piAttributes = [
    { label: 'Height', key: 'height'},
    { label: 'Weight', key: 'weight'},
    { label: 'Bodyfat', key: 'bodyfat'},
    { label: 'Skeletal Muscle', key: 'skeletalmuscle'},
]

export const myDayState = {
    Calories: '2000 Kcal',
    AttendanceStatus: 'Low',
}

export const user = {
    id: '19001569',
    nickname: 'SNN',
    name: 'Suoi Nuoc Nong',
    mail: '123@gmail.com',
    membershiplevel: 5,
    rating: 4,
    avatar: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1'
}

export const tabsExerciseDictionary = [
    'View All', 'Favorites', 'Pilates', 'Wait'
]

export const benhPress = 'https://images.pexels.com/photos/1903554/pexels-photo-1903554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
export const backHand = 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
export const legs = 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
export const yoga = 'https://images.pexels.com/photos/1882005/pexels-photo-1882005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

export const attributes = [
    {
        id: 1,
        type: 'Gym'
    },
    {
        id: 2,
        type: 'Health'
    },
    {
        id: 3,
        type: 'Muscle'
    }
];

export const set_list = [
    {
        type: 'warm',
        weight: '10kg',
        times: '10 times',
        pweight: '10kg',
        ptimes: '13times',
    },
    {
        type: 'fail',
        weight: '7kg',
        times: '15 times',
        pweight: '7kg',
        ptimes: '11times',
    },
    {
        type: 'great',
        weight: '15kg',
        times: '7 times',
        pweight: '15kg',
        ptimes: '10times',
    },
];

export const exerciseList = [
    {
        ex_name: 'Bench Press',
        attributes: [1, 2, 3],
        image: benhPress,
        set_list: set_list,
        ex_description: `The bench press builds the muscles of the chest as well as the triceps of the back of the arms and the front deltoid shoulder muscles. 
        You can do this exercise with barbells, dumbbells, or with a Smith machine, which constrains the path of the barbell and makes the exercise a little easier.`
    },
    {
        ex_name: 'Back Hand',
        attributes: [3],
        image: backHand,
        set_list: set_list,
        ex_description: `Stand with your feet about hip-width apart. Hold a weight in each hand with your arms resting along the front of your legs, palms facing in. ...
        Slowly lift your arms straight up in font of your body until they are in line with your shoulders. ...
        Then, slowly lower your arms back down to the starting position.`
    },
    {
        ex_name: 'Legs',
        attributes: [1, 2],
        image: legs,
        set_list: set_list,
        ex_description: `A leg extension is a lever machine for targeting the quadriceps muscles in the legs. 
        The exercise involves bending the leg at the knee and extending the legs (raising a padded bar), then lowering them back to the original position. 
        Leg extension workouts are great for isolating the front and side of the thighs.`
    },
    {
        ex_name: 'Yoga',
        attributes: [1, 3],
        image: yoga,
        set_list: set_list,
        ex_description: `Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India. 
        Yoga is one of the six orthodox schools of Hindu philosophical traditions. 
        There is a broad variety of yoga schools, practices, and goals in Hinduism, Buddhism, and Jainism.`
    },
];

export const list_member = [
    {
        id: '19001569',
        nickname: 'SNN',
        name: 'Suoi Nuoc Nong',
        mail: '123@gmail.com',
        membershiplevel: 5,
        rating: 4,
        avatar: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1'
    },
    {
        id: '19001570',
        nickname: 'VTV',
        name: 'Vai tren vai',
        mail: '456@gmail.com',
        membershiplevel: 2,
        rating: 2,
        avatar: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1'
    },
    {
        id: '19001571',
        nickname: 'CNN',
        name: 'Chay nha nghi',
        mail: '12asd3@gmail.com',
        membershiplevel: 5,
        rating: 1,
        avatar: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1'
    },
]

export const course_list = [
    {
        name: user.name,
        job: 'Trainer',
        course_name: exerciseList[0].ex_name,
        status: 'online',
        phone: '123258',
        member: list_member,
        image: benhPress,
    },
    {
        name: user.name,
        job: 'Trainer',
        course_name: exerciseList[1].ex_name,
        status: 'offline',
        phone: '123258',
        member: list_member,
        image: legs,
    },
    {
        name: user.name,
        job: 'Trainer',
        course_name: exerciseList[2].ex_name,
        status: '1 Day PT',
        phone: '123258',
        member: list_member,
        image: yoga,
    },
]

export const challenge_list = [
    {
        name: '100Days 6 pack',
        author: user.name,
        totalDay: 100,
        description: `The bench press builds the muscles of the chest as well as the triceps of the back of the arms and the front deltoid shoulder muscles. 
        You can do this exercise with barbells, dumbbells, or with a Smith machine, which constrains the path of the barbell and makes the exercise a little easier.`,
        image: benhPress,
    },
    {
        name: '10Days Ronaldo legs',
        author: user.name,
        totalDay: 100,
        description: `A leg extension is a lever machine for targeting the quadriceps muscles in the legs. 
        The exercise involves bending the leg at the knee and extending the legs (raising a padded bar), then lowering them back to the original position. 
        Leg extension workouts are great for isolating the front and side of the thighs.`,
        image: legs,
    },
    {
        name: 'Improve your health',
        author: user.name,
        totalDay: 'Every day',
        description: `Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India. 
        Yoga is one of the six orthodox schools of Hindu philosophical traditions. 
        There is a broad variety of yoga schools, practices, and goals in Hinduism, Buddhism, and Jainism.`,
        image: yoga,
    },
];

export const eventList = [
    {
        name: 'Sale Tụt Quần',
        dateStart: '2018-11-02',
        dateEnd: '2019-01-11',
        image: 'https://images.pexels.com/photos/1114376/pexels-photo-1114376.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        name: 'Chi ân khách hàng',
        dateStart: '2018-12-26',
        dateEnd: '2019-01-02',
        image: 'https://images.pexels.com/photos/89478/pexels-photo-89478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
];

export const goal_meal = [
    {
        time: '12:00',
        food_list: [
            { food: 'Chicken', amount: '2kg' },
            { food: 'Rice', amount: '0.5kg' },
            { food: 'Milk', amount: '500ml' },
        ]
    },
    {
        time: '22:00',
        food_list: [
            { food: 'Snack', amount: '1kg' },
            { food: 'Juice', amount: '1l' },
        ]
    },
    {
        time: '8:00',
        food_list: [
            { food: 'Bread', amount: '2' },
            { food: 'Water', amount: '250ml' },
        ]
    },
];

export const performed_meal = [
    {
        time: '12:00',
        food_list: []
    },
    {
        time: '22:00',
        food_list: [
            { food: 'Snack', amount: '1kg' },
            { food: 'Juice', amount: '1l' },
        ],
        image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        time: '8:00',
        food_list: [
            { food: 'Bread', amount: '2' },
            { food: 'Water', amount: '250ml' },
        ],
        image: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
]

export const day_of_week = ['月', '火', '水', '木', '金', '土', '日'];