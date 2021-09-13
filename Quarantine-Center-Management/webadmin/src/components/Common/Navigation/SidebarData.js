import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as HiIcons from 'react-icons/hi';




export const SidebarData = [
    {
        title: 'User management',
        path: '/user',
        icon: <AiIcons.AiOutlineUser/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Dashboard',
                path: '/finance/dashboard',
                icon: <RiIcons.RiDashboardLine />
            },
            {
                title: 'Details',
                path: '/finance/details',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Report',
                path: '/finance/report',
                icon: <HiIcons.HiDocumentReport />
            },
        ]
    },
    {
        title: 'Inventory management',
        path: '/inventory',
        icon: <AiIcons.AiFillEnvironment/>, 
    },
    {
        title: 'Ticketing system',
        path: '/viewalltickets',
        icon: <AiIcons.AiTwotoneRocket/>, 
    },
    {
        title: 'Food management',
        path: '/food',
        icon: <AiIcons.AiOutlineFolder/>, 
    },
    {
        title: 'Medical details',
        path: '/medical',
        icon: <AiIcons.AiFillMedicineBox/>, 
    },
    {
        title: 'Room management',
        path: '/room',
        icon: <AiIcons.AiOutlineChrome/>, 
    },
    {
        title: 'Staff management',
        path: '/stuff',
        icon: <AiIcons.AiOutlineRadiusUpleft/>, 
    },
    {
        title: 'Finance Managment',
        path: '/finance',
        icon: <AiIcons.AiFillCreditCard/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Dashboard',
                path: '/finance/dashboard',
                icon: <RiIcons.RiDashboardLine />
            },
            {
                title: 'Details',
                path: '/finance/details',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Report',
                path: '/finance/report',
                icon: <HiIcons.HiDocumentReport />
            },
        ],
    },
    {
        title: 'Login',
        path: '/login',
        icon: <AiIcons.AiOutlineLogin/>, 
    },
    // {
    //     title: 'Reports',
    //     path: '/reports',
    //     icon: <AiIcons.AiFillFileMarkdown />,
    //     iconClosed: <RiIcons.RiArrowDownSFill />,
    //     iconOpened: <RiIcons.RiArrowUpSFill />,
    //     subNav: [
    //         {
    //             title: 'Reports1',
    //             path: '/reports/reports1',
    //             icon: <IoIcons.IoIosPaper />
    //         },
    //         {
    //             title: 'Reports2',
    //             path: '/reports/reports2',
    //             icon: <IoIcons.IoIosPaper />
    //         },
    //     ]
    // },
    // {
    //     title: 'Products',
    //     path: '/products',
    //     icon: <FaIcons.FaCartPlus />, 
    // },
    // {
    //     title: 'Services',
    //     path: '/services',
    //     icon: <FaIcons.FaCartPlus />, 
    // },
    // {
    //     title: 'News',
    //     path: '/news',
    //     icon: <FaIcons.FaCartPlus />, 
    // }

];