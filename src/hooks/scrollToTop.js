const scrollToTop = (to = 0) => {
    window.scrollTo({
        top: to,
        behavior: 'smooth',
    });
};

export default scrollToTop;
