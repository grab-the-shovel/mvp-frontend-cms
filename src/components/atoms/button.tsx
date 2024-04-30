import { ButtonProp } from "src/utils//button.type"

//Approach due to TAilwind do not support dynamic classnames
//https://tailwindcss.com/docs/content-configuration#dynamic-class-names
const variants: { [key: string]: string } = {
  Primary: "bg-[#79968E] hover:bg-[#658179]",
  Secondary: "bg-[#B5BAC5] hover:bg-[#656E81]",
}

const sizes: { [key: string]: string } = {
  md: "py-2 px-4",
}

const Button = (props: ButtonProp) => {
  return (
    <>
      <button
        className={`${variants[props.color]} text-white font-bold ${sizes[props.size]} rounded`}
        disabled={props.disabled}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          props.onClick(e)
        }}>
        {props.children}
      </button>
    </>
  )
}

export default Button
