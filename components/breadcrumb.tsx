import { Fragment } from 'react'

type PathItem = {
  label: string
  slot?: boolean
}

type Props = {
  path?: PathItem[]
  layout?: boolean
  default?: boolean
}

export function Breadcrumb({
  path,
  layout: isLayout = false,
  default: isDefault = false
}: Props) {
  console.log('isLayout', isLayout)
  return (
    <div>
      {path?.map((item, index) => (
        <Fragment key={item.label + !!item.slot}>
          <span>
            {item.slot && '@Slot '}
            {item.label}
          </span>
          {index !== path.length - 1 && (
            <span className="font-bold text-blue-500"> / </span>
          )}
        </Fragment>
      ))}
      {isDefault && <span className="text-red-500"> (Default)</span>}
      {isLayout && <span className="text-blue-500"> (Layout)</span>}
    </div>
  )
}
