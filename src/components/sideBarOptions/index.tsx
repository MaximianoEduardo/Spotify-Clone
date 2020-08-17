import React from 'react'
import './index.css'

interface sideBarOtptionsProps {

    title: string,
    Icon?: React.ComponentType
  }


const SideBarOptions: React.FC<sideBarOtptionsProps> = ({ title, Icon }) => {

    return (
      <div className="sidebarOptions">

          { Icon && <Icon /> }

          { 
            Icon ? 
              <h4> {title} </h4>
              :
              <p> {title} </p>
          }
      </div>
    );
  }
  
export default SideBarOptions;
