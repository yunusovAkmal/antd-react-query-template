import { cn } from '~/lib/utils'

interface Style {
  [key: string]: string
}

type Props = {
  className?: string
}

export function Loader({ className }: Props) {
  return (
    <div className={cn('relative h-32 w-32', className)}>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute h-5 w-5 animate-[spinner_1.5s_ease-in-out_infinite] rounded-full"
          style={
            {
              background: 'linear-gradient(38deg, #40db5c, #03c7fd, #40db5c)',
              '--rotation': `${i * 60}deg`,
              animationDelay: `${i * 0.15}s`,
              transform: `rotate(var(--rotation)) translate(0, -150%)`,
              transformOrigin: '50% 50%'
            } as Style
          }
        />
      ))}
    </div>
  )
}
