import React from 'react'

type Props = React.HTMLProps<HTMLFormElement>

const Form = React.forwardRef<HTMLFormElement, Props>(
  ({ children, ...props }, ref) => {
    const element = document.querySelector(
      'meta[name=csrf-token]',
    ) as HTMLMetaElement
    const token = element && element.content

    return (
      <form {...props} ref={ref}>
        <input
          type="hidden"
          name="authenticity_token"
          value={token || undefined}
        />
        {children}
      </form>
    )
  },
)

export default Form
