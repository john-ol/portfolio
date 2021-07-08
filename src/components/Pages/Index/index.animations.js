export const InfoColAnimation = {
  hidden: {
    opacity: 0,
    x: '-50vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 0.8,
    },
  },
}

export const ImageColAnimation = {
  hidden: {
    opacity: 0,
    x: '50vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
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
