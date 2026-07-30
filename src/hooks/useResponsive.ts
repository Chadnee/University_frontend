import { Grid } from "antd";

const { useBreakpoint } = Grid;

const useResponsive = () => {
  const screens = useBreakpoint();

  const width =
    typeof window !== "undefined" ? window.innerWidth : 0;

  return {
     screens,
     width,

    // isMobile: width < 768,
    isMobile: width < 650,
    isTablet: width >= 650 && width < 992,
    isLaptop: width >= 992 && width < 1200,

    isSmallDesktop: width >= 1200 && width < 1550,
    // isDesktop: width >= 1550 && width < 1600
    // isLargeDesktop: width >= 1600,
    isLargeDesktop: width >= 1550,

    // isMobile : !!screens.xs && !screens.sm,
    // isTablet : !!screens.sm || !!screens.md,
    // isDesktop: screens.lg || screens.xl || screens.xxl
  };
};

export default useResponsive;
