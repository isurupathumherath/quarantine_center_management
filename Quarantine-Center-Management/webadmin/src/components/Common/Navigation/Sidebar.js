import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { Scrollbars } from 'react-custom-scrollbars';

// const Nav = styled.div`
// background : #15171c;
// height : 80px; 
// display:flex;
// justify-content: flex-start;
// align-items: center;
// top: 60px;
// `;

// const NavIcon = styled(Link)` 
//     font-size: 2rem;
//     height: 80px;
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
// `;

const SidebarNav = styled.nav`
    background-color: #1b5a90; 
    background-attachment: fixed;
    background-size: cover;
    width:250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0; 
    transition: 350ms;
    z-index: 10;
    top: 60px;

`;

const SidebarWrap = styled.div`
    width: 100%;
    top: 60px;

`

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <div id="sidebar-menu" class="sidebar-menu"></div>
                <IconContext.Provider value={{ color: '#fff' }}>
                    {/* <Nav>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>
            </Nav> */}
                    <SidebarNav sidebar={sidebar}>
                        <SidebarWrap>
                            {/* <NavIcon to="#">
                                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                                </NavIcon> */}
                            <Scrollbars style={{ width: "100%", height: "100%" }}>
                                {SidebarData.map((item, index) => {
                                    return <SubMenu item={item} key={index} />
                                })}
                            </Scrollbars>
                        </SidebarWrap>
                    </SidebarNav>
                </IconContext.Provider>
            </div>
        </div> 
    )
}

export default Sidebar;
