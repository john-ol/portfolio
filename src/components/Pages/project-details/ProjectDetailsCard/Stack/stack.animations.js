export const stackAnimations = {
  hidden: {
    // scale: 0,
    opacity: 0,
    y: '5vh',
  },
  visible: (i) => ({
    opacity: 1,
    // scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.6,
      delay: i * 0.25,
    },
  }),
}
