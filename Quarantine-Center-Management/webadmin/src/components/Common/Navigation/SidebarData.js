import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as HiIcons from 'react-icons/hi';
import * as BsIcons from 'react-icons/bs';


export const SidebarData = [  
    {
        title: 'Finance Managment',
        path: '/finance',
        icon: <AiIcons.AiFillCreditCard/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [ 
            {
                title: 'Payer Details',
                path: '/finance/payer',
                icon: <BsIcons.BsPerson />
            },
        ],
    }, 
    

];