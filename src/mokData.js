export const WALLET_INFO_MOK = {
  balance: '15534',
  profit_month: '60000',
  quantity_points: '154',
  total_transit_distance_m: '15',
};

export const WALLET_HISTORY_MOK = [
  {
    status: '0', // 0 - в процессе, 1 - исполнен, 2- отмена
    type: 'withdrawal', // withdrawal, refill, monetary_penalty
    comment: 'withdrawal',
    amount: '200',
  },
  {
    status: '1',
    type: 'refill',
    comment: 'some comment',
    amount: '500',
  },
];

export const STORY_DATA = [
  {
    user_id: 1,
    user_image: 'https://test.razvezu.pro/img/story/1/user_image.png',
    user_name: 'История 1',
    stories: [
      {
        story_id: 1,
        story_image: 'https://test.razvezu.pro/img/story/1/1.png',
        customProps: {
          buttonText: 'Click me',
          link: 'https://github.com/',
        },
      },
    ],
  },
  {
    user_id: 2,
    user_image: 'https://test.razvezu.pro/img/story/2/user_image.png',
    user_name: 'История 2',
    stories: [
      {
        story_id: 1,
        story_image: 'https://test.razvezu.pro/img/story/2/1.png',
        customProps: {
          buttonText: 'Click me',
          link: 'https://github.com/',
        },
      },
      {
        story_id: 2,
        story_image: 'https://test.razvezu.pro/img/story/2/2.png',
        customProps: {
          buttonText: 'Click me',
          link: 'https://github.com/',
        },
      },
      {
        story_id: 3,
        story_image: 'https://test.razvezu.pro/img/story/2/3.png',
        customProps: {
          buttonText: 'Click me',
          link: 'https://github.com/',
        },
      },
    ],
  },
];

export const FAQ_LIST = [
  {id: 1, question: '1 question', answer: 'the answer of question 1'},
  {id: 2, question: '2 question', answer: 'the answer of question 2'},
];
