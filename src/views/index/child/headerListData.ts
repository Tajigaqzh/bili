export interface HeaderList {
  buttonName: string;
  leftIcon?: string;
  rightIcon?: string;
  popups?: Popup[];
}

export interface Popup {
  popupTitle?: string;
  popChild: PopChild[];
}

export interface PopChild {
  name: string;
  url: string;
  description: string;
  rate: number;
}

export const res: HeaderList[] = [
  {
    buttonName: '首页',
    leftIcon: 'icon-icon_bilibili',
  },
  {
    buttonName: '番剧',
    popups: [
      {
        popupTitle: '热门番剧',
        popChild: [
          {
            name: 'aaa',
            url: 'adsd',
            description: '四点胡思',
            rate: 20,
          },
        ],
      },
    ],
  },

  {
    buttonName: '游戏中心',
  },

  {
    buttonName: '会员购',
  },

  {
    buttonName: '漫画',
  },

  {
    buttonName: '赛事',
  },

  {
    buttonName: '下载客户端',
  },
];
