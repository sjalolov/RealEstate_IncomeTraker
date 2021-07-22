import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { RiBuilding2Fill, RiStoreFill, RiBarChart2Fill } from "react-icons/ri";
import { GiAngryEyes,GiBackup } from "react-icons/gi";

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Houses',
    path: '/houses',
    icon: <RiBuilding2Fill />,
    cName: 'nav-text'
  },
  {
    title: 'Stores',
    path: '/stores',
    icon: <RiStoreFill />,
    cName: 'nav-text'
  },
  {
    title: 'Transactions',
    path: '/transactions',
    icon: <RiBarChart2Fill />,
    cName: 'nav-text'
  },
  {
    title: 'Custmers',
    path: '/custmers',
    icon: <GiAngryEyes />,
    cName: 'nav-text'
  },
  {
    title: 'Users',
    path: '/users',
    icon: <GiBackup/>,
    cName: 'nav-text'
  }
];
