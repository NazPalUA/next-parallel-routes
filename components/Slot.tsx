type Props = {
  children: React.ReactNode
}

export function Slot({ children }: Props) {
  return <span> @Slot {children}</span>
}
