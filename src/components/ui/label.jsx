// Label component that provides a styled label for form inputs
// Props: className (additional CSS classes), htmlFor (ID of the associated input), ...props (other HTML label attributes)
export function Label({ className, htmlFor, ...props }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className || ""}`}
      {...props}
    />
  )
}

export default Label

