export const encryptEmail = () => {
  let x1, x2, x3, x4, x5, x6, x7
  x1 = '<a href="'
  x1 += 'mai'
  x1 += 'lto:'
  x2 =
    '&#111;&#108;&#101;&#105;&#110;&#105;&#107;&#111;&#118;&#46;&#100;&#101;&#118;'
  x3 = '&#64;'
  x4 = '&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;'
  x5 = '">'
  x6 = x2 + '&#64;' + x4
  x7 = '</a>'
  return x1 + x2 + x3 + x4 + x5 + x6 + x7
}