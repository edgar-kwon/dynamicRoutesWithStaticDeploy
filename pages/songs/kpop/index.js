import Link from "next/link";

export default function Kpop() {
    return (
      <>
      <nav>
        <Link href="/songs/kpop/빅뱅/거짓말"><a>빅뱅 거짓말</a></Link>
        <Link href="/songs/kpop/aespa/savage"><a>aespa savage</a></Link>
      </nav>
      <style jsx>{`nav{display: flex; flex-direction: column}`}</style>
      </>
    )
  }
  