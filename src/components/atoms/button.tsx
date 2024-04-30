import { ReactNode } from "react"

//Approach due to TAilwind do not support dynamic classnames
//https://tailwindcss.com/docs/content-configuration#dynamic-class-names
const variants: Record<string, string> = {
  primary: "bg-[#79968E] hover:bg-[#658179]",
  secondary: "bg-[#B5BAC5] hover:bg-[#656E81]",
}

const sizes: Record<string, string> = {
  md: "py-2 px-4",
}

export interface ButtonProp
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size: keyof typeof sizes
  onClick: () => void
  children: ReactNode
  color: keyof typeof variants
  disabled?: boolean
  styles?: string
}

const Button = ({
  color,
  size,
  styles,
  disabled = false,
  onClick,
  children,
  ...rest
}: ButtonProp) => {
  return (
    <button
      className={`${variants[color]}  text-white font-bold ${sizes[size]} rounded ${styles}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}>
      {children}
    </button>
  )
}

export default Button
