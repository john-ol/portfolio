export const infoColAnimation = {
  hidden: {
    opacity: 0,
    y: '-50vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
    },
  },
}

export const imageColAnimation = {
  hidden: {
    opacity: 0,
    y: '50vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      delay: 0.3,
    },
  },
}
