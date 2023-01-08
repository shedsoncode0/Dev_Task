export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 2,
            staggerChildren: 1,
        },
    },
};

export const item = {
    hidden: { y: "100%" },
    show: {
        y: "0%",
        transition: {
            duration: 2
        },
    },
};