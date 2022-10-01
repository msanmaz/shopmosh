import Layout from "common/Layout/lay-out"
import Head from "next/head"
import Link from "next/link"

const NotFound = () => {
  return (
    <>
    <Head>        <title>MOSH | 404</title>
</Head>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
        <h1 className="text-2xl-semi text-gry-900">Page not found</h1>
        <p className="text-small-regular text-gray-700">
          The page you tried to access does not exist.
        </p>
        <Link href="/">
          <a className="mt-4 underline text-base-regular text-gray-900">
            Go to frontpage
          </a>
        </Link>
      </div>
    </>
  )
}

NotFound.getLayout = (page) => {
  return <Layout title={'404'}>{page}</Layout>
}

export default NotFound
