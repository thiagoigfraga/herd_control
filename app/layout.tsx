export const metadata = {
  title: 'Herd Control',
  description: 'Cadastro de Animais e Profissionais da Veterinária',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
