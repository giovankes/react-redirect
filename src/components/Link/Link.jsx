import React from 'react'
import NextLink from 'next/link'
export const Link = ({
  uri,
  url,
  title,
  rel,
  target,
  isButton,
  children,
  style,
  ...props
}) => {
  const Element = isButton ? Button : 'a'

  //Anchor functionality

  const clickHandle = () => {
    window.open(url, target)
  }
  return target ? (
    // external link or button
    <Element
      href={!isButton ? url : undefined}
      onClick={isButton ? clickHandle : undefined}
      target={!isButton ? target : undefined}
      rel={rel}
      title={title}
      {...props}
    >
      <span>{children}</span>
    </Element>
  ) : (
    // internal link or btn
    <NextLink href={uri || url || undefined} as={url} passHref>
      <Element rel={rel} title={title} href={url} {...props}>
        <span>{children}</span>
      </Element>
    </NextLink>
  )
}
