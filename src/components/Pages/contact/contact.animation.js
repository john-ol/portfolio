export const contactFormAnimation = {
  hidden: {
    opacity: 0,
    y: '50vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.7,
    },
  },
}
