import { useRouter } from "next/router"
import { useEffect } from "react";

export default function KpopSong(params) {
    const router = useRouter();
    console.log(router);
    useEffect(()=>{ if(router.query.params){window.alert( router.query.params[0] +"의 " + router.query.params[1])}}, [router.query])
    return (
      <>
        <button onClick={()=>{router.push("/songs/kpop")}}>Go back Kpop</button>
        <h3>가수: {router.query.params? router.query.params[0] : ""}</h3>
        <h3>제목: {router.query.params? router.query.params[1] : ""}</h3>
      </>
    )
  }
  