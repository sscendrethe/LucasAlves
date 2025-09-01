export default function Head() {
  return (
    <>
      <title>Agencia EuLukasAlves</title>
      <meta name="description" content="Venha conhecer os nossos serviços!" />

      {/* Open Graph */}
      <meta property="og:title" content="Agência EuLukasAlves" />
      <meta property="og:description" content="Venha conhecer os nossos serviços!" />
      <meta property="og:image" content="/images/logo/logo.png" />
      <meta property="og:url" content="https://eulukasalves.vercel.app/" />
      <meta property="og:type" content="website" />

      {/* Favicon */}
      <link rel="icon" href="/images/logo/logo.png" type="image/png" />
    </>
  )
}

