export const infoColAnimation = {
  hidden: {
    opacity: 0,
    x: '-50vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
    },
  },
}

export const imageColAnimation = {
  hidden: {
    opacity: 0,
    x: '50vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 12,
      bounce: 0.35,
      delay: 0.3,
      duration: 1,
    },
  },
}
export const socialIconsAnimate = {
  onHover: {
    translateY: '-0.8rem',
  },
  onClick: {
    scale: 0.9,
  },
  transition: {
    duration: 0.3,
  },
}
