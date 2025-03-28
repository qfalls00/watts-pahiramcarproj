// UI button component with variants and sizes
// Props: children (button content), className (additional CSS classes),
// variant (style variant), size (size variant), ...props (other HTML button attributes)
export function Button({ children, className, variant = "default", size = "default", ...props }) {
  // Base styles for all buttons
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

  // Style variants for different button types
  const variants = {
    default: "bg-black text-white hover:bg-gray-800", // Default black button
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground", // Outlined button
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80", // Secondary button
    ghost: "hover:bg-accent hover:text-accent-foreground", // Ghost button (no background)
    link: "text-primary underline-offset-4 hover:underline", // Link-style button
  }

  // Size variants for different button sizes
  const sizes = {
    default: "h-10 px-4 py-2", // Default size
    sm: "h-9 rounded-md px-3", // Small size
    lg: "h-11 rounded-md px-8", // Large size
    icon: "h-10 w-10", // Icon button (square)
  }

  // Get the appropriate styles based on variant and size
  const variantStyle = variants[variant] || variants.default
  const sizeStyle = sizes[size] || sizes.default

  // Combine all styles with any additional className provided
  const buttonClassName = `${baseStyles} ${variantStyle} ${sizeStyle} ${className || ""}`

  // Render the button with combined styles and passed props
  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  )
}

export default Button

