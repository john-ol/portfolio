export const projectAnimations = {
  hidden: {
    opacity: 0,
    y: '20vh',
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.3,
      delay: i * 0.15,
    },
  }),
}
