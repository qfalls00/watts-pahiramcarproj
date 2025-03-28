"use client" // Indicates this is a client-side component that uses client-side features

import { useState } from "react" // Import useState hook for state management

// Select component that provides a custom dropdown select
// Props: children (select options), value (controlled value), onValueChange (value change handler),
// className (additional CSS classes), placeholder (placeholder text), ...props (other attributes)
export function Select({ children, value, onValueChange, className, placeholder, ...props }) {
  const [isOpen, setIsOpen] = useState(false) // State to control dropdown visibility
  const [selectedValue, setSelectedValue] = useState(value || "") // State for selected value

  // Function to handle option selection
  const handleSelect = (newValue) => {
    setSelectedValue(newValue) // Update internal selected value
    if (onValueChange) {
      onValueChange(newValue) // Call the provided onValueChange handler
    }
    setIsOpen(false) // Close the dropdown after selection
  }

  return (
    <div className="relative">
      {/* Trigger button that shows the current selection and toggles the dropdown */}
      <SelectTrigger className={className} onClick={() => setIsOpen(!isOpen)} {...props}>
        <SelectValue placeholder={placeholder}>{selectedValue || placeholder}</SelectValue>
      </SelectTrigger>

      {/* Dropdown content - only shown when isOpen is true */}
      {isOpen && <SelectContent>{children}</SelectContent>}
    </div>
  )
}

// SelectTrigger component that renders the button to open/close the dropdown
// Props: children (trigger content), className (additional CSS classes), ...props (other attributes)
export function SelectTrigger({ children, className, ...props }) {
  return (
    <button
      type="button"
      className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className || ""}`}
      {...props}
    >
      {children}
      {/* Dropdown chevron icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 opacity-50"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  )
}

// SelectValue component that displays the selected value or placeholder
// Props: children (selected value), placeholder (placeholder text)
export function SelectValue({ children, placeholder }) {
  return <span className="flex-1 text-left truncate">{children || placeholder}</span>
}

// SelectContent component that renders the dropdown content container
// Props: children (dropdown options)
export function SelectContent({ children }) {
  return (
    <div className="absolute z-50 min-w-[8rem] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80 mt-1">
      <div className="w-full p-1">{children}</div>
    </div>
  )
}

// SelectItem component that renders a selectable option in the dropdown
// Props: children (option content), value (option value), className (additional CSS classes), ...props (other attributes)
export function SelectItem({ children, value, className, ...props }) {
  return (
    <button
      className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className || ""}`}
      value={value}
      {...props}
    >
      {children}
    </button>
  )
}

export default Select

