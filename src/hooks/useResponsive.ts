import { Grid } from "antd";

const {useBreakpoint} = Grid;

const useResponsive = () => {
    const screens = useBreakpoint()

    return {
        screens ,
        isMobile: screens.xs,
        isTablet: screens.sm || screens.md,
        isDesktop: screens.lg || screens.xl || screens.xxl
    }
}

export default useResponsive;