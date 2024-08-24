export const metadata = {
  title: 'WFY',
  description: 'What Flows You',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
