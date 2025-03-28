// Mark this component as a client component to enable client-side interactivity
"use client"

// UI checkbox component
export function Checkbox({ className, ...props }) {
  // Render a checkbox input with base styles and any additional className provided
  return (
    <input
      type="checkbox"
      className={`h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary ${className || ""}`}
      {...props}
    />
  )
}

export default Checkbox

