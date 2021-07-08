export const InfoColAnimation = {
  hidden: {
    opacity: 0,
    y: '-50vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.25,
      duration: 1,
    },
  },
}

export const ImageColAnimation = {
  hidden: {
    opacity: 0,
    y: '50vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
}
