import { useRouter } from 'next/router';

const Year = () => {

    const router = useRouter();
    const { year } = router.query;

  return (
    <div style={{
        margin: 0,
        color: 'white',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
    }}>
  <div style={{
    margin: 'auto',
    width: '50%',
    fontFamily: 'consolas',
  }}>
        <h1>{year}</h1>
        </div></div>
    )
}

export default Year;