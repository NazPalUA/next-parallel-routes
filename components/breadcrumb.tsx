import { Fragment } from 'react'

export type PathItem = {
  label: string
  slot?: boolean
}

type Props = {
  path?: PathItem[]
}

export function Breadcrumb({ path }: Props) {
  return (
    <div className="inline-flex items-center gap-0.5 lowercase italic font-bold text-sm">
      {path?.map((item, index) => (
        <Fragment key={item.label + !!item.slot}>
          <span className="">
            {item.slot && '@slot-'}
            {item.label}
          </span>
          {index !== path.length - 1 && (
            <span className=" text-blue-500">/</span>
          )}
        </Fragment>
      ))}
    </div>
  )
}
