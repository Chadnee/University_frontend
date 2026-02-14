import { NavLink } from "react-router-dom";
import type { MenuProps } from "antd";
import type { TUserPath } from "../types";

type MenuItem = Required<MenuProps>["items"][number];

export const SidebarGenenrater = (
  items: TUserPath[],
  role: string
): MenuItem[] => {
  return items.reduce<MenuItem[]>((acc, item) => {
    
    // ✅ Single menu item
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: (
          <NavLink to={`/${role}/${item.path}`}>
            {item.name}
          </NavLink>
        ),
      });
    }

    // ✅ Sub menu
    if (item.children) {
      const children: MenuItem[] = item.children
        .filter(child => child.name && child.path) // 🔥 remove undefined
        .map(child => ({
          key: child.name!,
          label: (
            <NavLink to={`/${role}/${child.path}`}>
              {child.name}
            </NavLink>
          ),
        }));

      acc.push({
        key: item.name!,
        label: item.name,
        children,
      });
    }

    return acc;
  }, []);
};

// import { NavLink } from "react-router-dom";
// import type { TGeneratedSidebarItems, TUserPath } from "../types";



// export const SidebarGenenrater = (items: TUserPath[], role:string) => {
//     const sideBar = items.reduce((acc:TGeneratedSidebarItems[], item) => {
//         if (item.path && item.name) {
//           acc.push({
//               key: item.name,
//               label:<NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>
//           })
//         };
      
//         if(item.children) {
//           acc.push({
//               key: item.name!,
//               label: item.name,
//               children:item.children.map((child) =>{
//               if (child.name){
//                 return {
//                   key: child.name,
//                   label:<NavLink to = {`/${role}/${child.path}`}>{child.name}</NavLink>
//                 }
//               }
//               })
//           })
//         }
//         return acc;
//       },[]) 
//       return sideBar
// }