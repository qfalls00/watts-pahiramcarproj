// Card component that provides a container with styling
// Props: className (additional CSS classes), ...props (other HTML div attributes)
export function Card({ className, ...props }) {
  return <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || ""}`} {...props} />
}

// CardHeader component that provides a styled header section for the card
// Props: className (additional CSS classes), ...props (other HTML div attributes)
export function CardHeader({ className, ...props }) {
  return <div className={`flex flex-col space-y-1.5 p-6 ${className || ""}`} {...props} />
}

// CardTitle component that provides a styled title for the card
// Props: className (additional CSS classes), ...props (other HTML h3 attributes)
export function CardTitle({ className, ...props }) {
  return <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className || ""}`} {...props} />
}

// CardDescription component that provides a styled description for the card
// Props: className (additional CSS classes), ...props (other HTML p attributes)
export function CardDescription({ className, ...props }) {
  return <p className={`text-sm text-muted-foreground ${className || ""}`} {...props} />
}

// CardContent component that provides a styled content section for the card
// Props: className (additional CSS classes), ...props (other HTML div attributes)
export function CardContent({ className, ...props }) {
  return <div className={`p-6 pt-0 ${className || ""}`} {...props} />
}

// CardFooter component that provides a styled footer section for the card
// Props: className (additional CSS classes), ...props (other HTML div attributes)
export function CardFooter({ className, ...props }) {
  return <div className={`flex items-center p-6 pt-0 ${className || ""}`} {...props} />
}

