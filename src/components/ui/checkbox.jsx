// Checkbox component that provides a styled checkbox input
// Props: className (additional CSS classes), ...props (other HTML input attributes)
export function Checkbox({ className, ...props }) {
  return (
    <input
      type="checkbox"
      className={`h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary ${className || ""}`}
      {...props}
    />
  )
}

export default Checkbox

