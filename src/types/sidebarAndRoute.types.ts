import type { ReactNode } from "react";

export type TRoute = {
    path: string,
    element: ReactNode;
};
export type TUserPath = {
    name?: string;
    path?: string;
    element?: ReactNode;
    children?: TUserPath[];
};
export type TGeneratedSidebarItems = {
    key:string,
    label:ReactNode,
    children?:TGeneratedSidebarItems[]
} | undefined