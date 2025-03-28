// Mark this component as a client component to enable client-side interactivity
"use client"

// UI label component
export function Label({ className, htmlFor, ...props }) {
  // Render a label with base styles and any additional className provided
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className || ""}`}
      {...props}
    />
  )
}

export default Label

